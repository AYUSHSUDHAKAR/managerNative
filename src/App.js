import React, { Component } from "react";
import NavBar from "./shared/NavBar";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Addorg from "./Addorg";
import EditOrg from "./EditOrg";
import OrgDetail from "./OrgDetail";
import fire from "./config/fire";
import store from "store";
import { provider } from "./config/fire";
import Button from "react-bootstrap/Button";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: { signInSuccessWithAuthResult: () => false },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userdata: {},
      error: "",
      gstnumber: {},
      gotoeditorg: false,
      isclient: false,
    };
  }

  componentWillMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
        store.set("user", user);
        this.roleCheck();
      }
    });
  }

  componentDidMount() {
    console.log(store.get("user"));
  }

  roleCheck() {
    fire
      .firestore()
      .collection("users")
      .doc(this.state.user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          fire
            .firestore()
            .collection("users")
            .doc(this.state.user.uid)
            .onSnapshot((doc) => {
              this.setState({ userdata: doc.data() });
              console.log(this.state.isclient);
            });
        } else {
          this.setState({ isclient: true });
        }
      });
  }

  setUserAuthDetail = (user) => {
    this.setState({ user: user });
  };

  render() {
    const HomePage = () => {
      return (
        <Home
          isClient={this.state.isclient}
          user={this.state.user}
          userdata={this.state.userdata}
          error={this.state.error}
        />
      );
    };

    const AddOrgPage = () => {
      return <Addorg user={this.state.user} />;
    };

    const EditOrgPage = () => {
      console.log(this.state.gstnumber);
      return (
        <EditOrg user={this.state.user} gstnumber={this.state.gstnumber} />
      );
    };
    return (
      <div>
        {!store.get("user") && (
          <StyledFirebaseAuth
            className="login"
            uiConfig={uiConfig}
            firebaseAuth={fire.auth()}
          />
        )}
        {this.state.user && (
          <BrowserRouter>
            <div className="App">
              <NavBar
                {...this.props}
                isclient={this.state.isclient}
                user={this.state.user}
                userAuthDetailCallBack={this.setUserAuthDetail}
              />

              <Route exact path="/" component={HomePage} />
              <Route path="/addorg" component={AddOrgPage} />
              <Route path="/orgdetail" component={OrgDetail} />
              <Route path="/editorg" component={EditOrgPage} />
            </div>
          </BrowserRouter>
        )}
      </div>
    );
  }
}
