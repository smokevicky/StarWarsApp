StarWarsApp was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Setting up on local](#updating-to-new-releases)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
- [User journey](#user-journey)
- [Known Bugs](#known-bugs)

## Setting up on local

Checkout the code onto a local folder

* Open Command Prompt or Powershell by `shift + right click`.
* Run `npm install` so that all necessary packages are installed.

## Folder Structure

After creation, your project should look like this:

```
starwarsapp/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.routing.js
    App.test.js
    index.css
    index.js
    logo.svg
    api-helpers/
      api-constants.js
      api-helpers.js
      base.js
      peopleapi-helper.js
      planetapi-helper.js
    components/
      dashboard/
        dashboard.css
        dashboard.js
      login/
        login.css
        login.js
      partial-views/
        footer/
          footer.js
        header/
          header.js
    enums/
      constants.js
      error-enum.js
    helpers/
      localstorage-helper.js
      people-helper.js
      planet-helper.js
      redirect-helper.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## User journey

* Screen 1: Login

  In the username text field, users can enter their usernames in lowercase or partially. The code will search for their details in the api and fetch it. Users can either press enter or click on the signin button next to the input control after entering their details. Signin button will stay disabled untill user enters an user name.

  After a successful login, user will be redirected to dashboard page.

  In case the user name is not found on the server, user will see an error message on the screen i.e. `"Name not found !"`. In case any other unexpected http errors, user will see `"Unexpected error occured"`
  
  Untill an user is signed in successfully, he won't see his `username` with a `Logout` button, on top-right navbar.

  Successful signin information is stored in browser's `localstorage` and users can return back to their session even after closing - reopening their tabs.

* Screen 2: Dashboard

  Dashboard screen has a manually implemented table iterated on list of available `Planets` along with their details. The table has pagination button as well as code, in place.

  A `Search textbox` is available on top-right along with a search button. Users can either click on the button or press enter to trigger a search. Since pagination is not working, the search functionality will search within a single page on a locally saved list of planet details and will re-populate the table.

  To be able to see all records again, clear the search-box and press enter again.

  Users can logout by clicking on their `username` on top-right navbar dropdown -> `Logout`. Localstorage will get cleared once user logs out. User will get redirected to `Screen 1` after a successful logout.

## Known Bugs

* Users may not see their user on top-right navbar after a successful login. Please refresh the page once to be able to see the details. Same applies to log out.
* Pagination doesn't work since swapi doesn't work anymore. Server side pagination was working when code was intact.
* Once the swapi gets back up, we can uncomment related code in `peopleapi-helper.js` and `planetapi-helper.js` so that the code integrates to apis again!

Thank You :)
