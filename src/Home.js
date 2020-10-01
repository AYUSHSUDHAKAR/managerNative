import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fire from "./config/fire";
import store from "store";

export default function Home(props) {
  const [organizations, setOrganizations] = useState();
  const [isclient, setClient] = useState(false);
  const [organization, setOrganization] = useState();
  useEffect(() => {
    let mounted = true;
    console.log(props.user);
    const isclient = props.isClient;
    setClient({ isclient });
    console.log(isclient);
    if (props.user != null && !isclient) {
      console.log("admin");
      fire
        .database()
        .ref("organizations")
        .orderByChild("createdby")
        .equalTo(`${props.user.uid}`)
        .on("value", (snapshot) => {
          if (mounted) {
            const orgObject = snapshot.val();
            const organizations = [];
            for (let id in orgObject) {
              organizations.push(orgObject[id]);
            }
            setOrganizations(organizations);
          }
        });
    } else if (props.user != null) {
      console.log("Client");

      fire
        .database()
        .ref("organizations")
        .orderByChild("orgownername")
        .equalTo(`${props.user.displayName}`)
        .on("value", (snapshot) => {
          if (mounted) {
            const orgObject = snapshot.val();
            const organizations = [];
            for (let id in orgObject) {
              organizations.push(orgObject[id]);
            }
            setOrganizations(organizations);
          }
        });
    }

    return () => (mounted = false);
  }, [props]);

  return (
    <div className="container">
      {props.user == null && <h2>You are Not Logged In</h2>}
      {props.user != null && (
        <div className="row">
          {organizations
            ? organizations.map((organization) => (
                <div className="col-12 col-md-6 p-3">
                  <Card>
                    <Card.Link href="./orgdetail" style={{ color: "initial" }}>
                      <Card.Header><h5>{organization.organizationname}</h5></Card.Header>
                      <Card.Body>
                        <Card.Title className="mb-2 text-muted">
                          {organization.orgownername}
                        </Card.Title>
                        <Card.Text>{organization.address}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {!props.isClient && (
                          <Card.Link
                            href="./editorg"
                            onClick={() => {
                              store.set("organization", { organization });
                            }}
                          >
                            <Button>Edit</Button>
                          </Card.Link>
                        )}
                        {!props.isClient && (
                          <Card.Link
                            onClick={function del() {
                              console.log("Delete");
                              fire
                                .database()
                                .ref("organizations/" + organization.gstnumber)
                                .remove();
                            }}
                          >
                            <Button>Delete</Button>
                          </Card.Link>
                        )}
                      </Card.Footer>
                    </Card.Link>
                  </Card>
                </div>
              ))
            : ""}
        </div>
      )}
    </div>
  );
}
