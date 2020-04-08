import Constants from "../enums/constants";

var loggedInUserNameText;

const LocalStorageHelper = {
    isUserLoggedIn: function() {
        let loggedInUserName = localStorage.getItem(Constants.localStorageKeyText);
        if(loggedInUserName && loggedInUserName.trim().length > 0){
            // user is logged in
            loggedInUserNameText = loggedInUserName;
            return true;
        } 
        return false;
    },
    getLoggedInUserName: function() {
        return loggedInUserNameText;
    },
    logInUser: function(payload) {
        localStorage.setItem(Constants.localStorageKeyText, payload.name);
    },
    logoutUser: function() {
        localStorage.removeItem(Constants.localStorageKeyText);
    }
}

export default LocalStorageHelper;