import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import store from "store";
import fire from "../config/fire";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      user: null,
    };
  }

  logout() {
    store.remove("user");
    fire
      .auth()
      .signOut()
      .then(() => {
        console.log("logout");
        this.setState({
          user: null,
        });
        store.remove("user");
        this.props.userAuthDetailCallBack(this.state.user);
        console.log(this.state.user);
      });
  }

  componentWillMount(){
    store.set("user",);
  }

  render() {
    return (
      <div className="mb-3">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.props.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {!this.props.isclient&&<Nav.Link href="/addorg">Add Organizations</Nav.Link>}
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav>
                <Button onClick={this.logout} className="outline-primary">
                  Log Out
                </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
