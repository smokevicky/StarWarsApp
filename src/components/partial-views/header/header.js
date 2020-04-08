import React, { Component } from 'react';
import logo from '../../../logo.svg';
import LocalStorageHelper from '../../../helpers/localstorage-helper';
import RedirectHelper from '../../../helpers/redirect-helper';

class Header extends Component {
  constructor(){
    super();

    this.state = {
      isUserLoggedIn: false,
      loggedInUserName: "",
      redirectHtml: ""
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.checkIfUserIsLoggedIn();
  }

  checkIfUserIsLoggedIn () {
    if(LocalStorageHelper.isUserLoggedIn()){
      this.setState({
          isUserLoggedIn: true,
          loggedInUserName: LocalStorageHelper.getLoggedInUserName()
      });
    }
    this.forceUpdate();
  }

  handleLogout() {
    LocalStorageHelper.logoutUser();
    this.setState({
      redirectHtml: new RedirectHelper().redirectToLogin()
    });
    window.location.reload();
  }

  render() {

    const {isUserLoggedIn, loggedInUserName, redirectHtml } = this.state;

    var logoutDropdownHtml = isUserLoggedIn
    ? (<ul class="nav navbar-nav navbar-right">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {loggedInUserName}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" onClick={this.handleLogout} >Logout</a>
          </div>
        </li>
      </ul>)
    : "";

    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/login">
          <img src={logo} className="App-logo" alt="logo" />
          Star Wars App
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul class="nav navbar-nav navbar-right mr-auto">
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">&nbsp;</a>
            </li>
          </ul>

          {logoutDropdownHtml}
        </div>
        {redirectHtml}
      </nav>
    );
  }
}

export default Header;
