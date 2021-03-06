import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card";
import fire from "./config/fire";

export default class Addorg extends Component {
  constructor(props) {
    super(props);
    this.addOrganization = this.addOrganization.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      show: false,
      gstNumber: "",
      orgName: "",
      orgOwnerName: "",
      address: "",
      state: "",
      city: "",
      zipcode: "",
      createdBy: "",
      createdAt: null,
      updatedAt: null,
    };
  }

  addOrganization() {
    console.log("add");
    const gstnumber = this.state.gstNumber;
    const organizationname = this.state.orgName;
    const orgownername = this.state.orgOwnerName;
    const address = this.state.address;
    const state = this.state.state;
    const city = this.state.city;
    const zipcode = this.state.zipcode;
    const createdby = this.props.user.uid;
    const createdat = Date().toLocaleString();
    console.log(zipcode);
    fire
      .database()
      .ref(`organizations/${this.state.gstNumber}`)
      .set({
        gstnumber,
        organizationname,
        orgownername,
        address,
        state,
        city,
        zipcode,
        createdby,
        createdat,
      })
      .then(this.setState({ show: true }));
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target.value);
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Toast
            onClose={() => this.setState({ show: false })}
            show={this.state.show}
            delay={3000}
            autohide
          >
            <Toast.Body>Organization Added</Toast.Body>
          </Toast>
        </div>
        <Card style={{ width: "100%" }}>
          <Card.Header  className="text-center"><h3>Add Organization</h3></Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group
                  className="col-xs-12 col-md-4"
                  controlId="formGridGstNumber"
                >
                  <Form.Label>GST Number</Form.Label>
                  <Form.Control
                    name="gstNumber"
                    type="text"
                    placeholder="GST Number"
                    onChange={this.handleInputChange}
                    value={this.state.gstNumber}
                  />
                </Form.Group>

                <Form.Group
                  className="col-xs-12 col-md-8"
                  controlId="formGridOrganizationName"
                >
                  <Form.Label>Organization Name</Form.Label>
                  <Form.Control
                    name="orgName"
                    type="text"
                    placeholder="Organization Name"
                    onChange={this.handleInputChange}
                    value={this.state.orgName}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridFullName">
                <Form.Label>Owner's Name</Form.Label>
                <Form.Control
                  name="orgOwnerName"
                  type="text"
                  placeholder="Full Name"
                  onChange={this.handleInputChange}
                  value={this.state.orgOwnerName}
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="Apartment, studio, or floor"
                  onChange={this.handleInputChange}
                  value={this.state.address}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={this.handleInputChange}
                    value={this.state.city}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    name="state"
                    type="text"
                    placeholder="State"
                    onChange={this.handleInputChange}
                    value={this.state.state}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    name="zipcode"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.zipcode}
                  />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" onClick={this.addOrganization}>
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
