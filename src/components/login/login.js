// react imports
import React, { Component } from 'react';

// helper imports
import RedirectHelper from '../../helpers/redirect-helper';
import PeopleHelper from '../../helpers/people-helper';

// style imports
import './login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      loginUserName: "",
      isHandlingError: false,
      errorMessage: "",
      redirectHtml: ""
    };
    this.setLoginUserName = this.setLoginUserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setLoginUserName(event) {
    this.setState({
      loginUserName: event.target.value
    });
  }

  onSubmit(event) {
    // form submit
    event.preventDefault();
    
    this.setState({
      isLoading: true
    });

    PeopleHelper.login(this.state.loginUserName)
    .then(result => {
      this.setState({
        redirectHtml: new RedirectHelper().redirectToDashboard(result)
      });
    })
    .catch(err => {
      this.handleError(err);
    })
    .finally(() => {
      this.setState({
        isLoading: false
      });
    });

    // not to let the form submit
    return false;
  }

  handleError (err) {
    this.setState({
      isHandlingError: true,
      errorMessage: err.toString(),
      loginUserName: ""
    });
  }

  render() {
    const { loginUserName, isLoading, isHandlingError, errorMessage, redirectHtml } = this.state;

    let spinnerHtml, errorHtml;

    if(isLoading) {
      spinnerHtml = <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>;
    } else {
      spinnerHtml = <div><i class="fas fa-sign-in-alt"></i></div>;
    }

    if(isHandlingError) {
      errorHtml = <div class="row pt-4">
                    <div class="col-sm-4 offset-sm-4">
                      <div class="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    </div>
                  </div>;
    } else {
      errorHtml = "";
    }

    return (
      <div class="container-fluid login-wrapper">
        <form onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col-sm-3 offset-sm-4">
              <p class="text-left">Enter your name: </p>
            </div>
          </div>
          <div class="row">
            
            <div class="col-sm-3 offset-sm-4">
              <input type="text"
                disabled={isLoading}
                value={ loginUserName }
                onChange={this.setLoginUserName}
                placeholder="e.g. Luke Skywalker, jyoti"
                class="form-control" />
            </div>

            <div class="col-sm-1">
              <button type="submit"
                disabled={loginUserName.trim().length < 1}
                className="btn btn-outline-info btn-block">
                  {spinnerHtml}
              </button>
            </div>

          </div>
          
          {errorHtml}

        </form>
        {redirectHtml}
      </div>
    );
  }
}

export default Login;
