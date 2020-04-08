// react imports
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LocalStorageHelper from '../helpers/localstorage-helper';

class RedirectHelper extends Component {

    redirectToDashboard = function (payload) {
        LocalStorageHelper.logInUser(payload);
        return <Redirect to='/dashboard' />;
    };

    redirectToLogin = function () {
        return <Redirect to='/login' />;
    };
}

export default RedirectHelper;


