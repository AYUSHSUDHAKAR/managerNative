import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Form, Button } from "react-bootstrap";

export default class OrgDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "home",
    };
  }
  render() {
    return (
      <div className="container">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Tabs
              className="nav-fill"
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={(k) => {
                this.setState({ key: k });
              }}
            >
              <Tab
                className="container"
                tabClassName="detail_tab"
                eventKey="home"
                title="General"
              >
                <Form>
                  <Form.Group
                    className="mt-3"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column xs={5}>
                      GST Number:
                    </Form.Label>
                    <Col xs={7}>
                      <Form.Control
                        type="text"
                        readOnly="true"
                        value="12345345"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="mt-3"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column xs={5}>
                      GOrganization:
                    </Form.Label>
                    <Col xs={7}>
                      <Form.Control
                        type="text"
                        readOnly="true"
                        value="Organization 1"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    className="px-3"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label>Owner:</Form.Label>

                    <Form.Control
                      type="text"
                      readOnly="true"
                      value="Ayush Sudhakar"
                    />
                  </Form.Group>
                </Form>
              </Tab>
              <Tab
                tabClassName="detail_tab"
                eventKey="profile"
                title="My Return Status"
              >
                <Form>
                  <Form.Group
                    className="p-1 mt-3"
                    as={Row}
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column xs={5}>
                      Financial Year:
                    </Form.Label>
                    <Col xs={7}>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Col xs={6}>
                        <Button>Show Status</Button>
                      </Col>
                      <Col xs={6}>
                        <Button>Share</Button>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Form>

                <p>
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                  Donec sollicitudin molestie malesuada. Donec sollicitudin
                  molestie malesuada. Proin eget tortor risus. Praesent sapien
                  massa, convallis a pellentesque nec, egestas non nisi.
                </p>
              </Tab>
              <Tab tabClassName="detail_tab" eventKey="contact" title="Reports">
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                  pulvinar a. Cras ultricies ligula sed magna dictum porta.
                  Vivamus magna justo, lacinia eget consectetur sed, convallis
                  at tellus. Sed porttitor lectus nibh.
                </p>

                <p>
                  Proin eget tortor risus. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Mauris blandit aliquet elit,
                  eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Pellentesque in ipsum id orci
                  porta dapibus.
                </p>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>

        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
