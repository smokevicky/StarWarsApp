import base from './base';
import ApiHelper from './api-helper';
import ApiConstants from './api-constants';
import Constants from '../enums/constants';
// import PeopleApiResponse from '../models/people-models';

const BASEURL = base.baseUrl + ApiConstants.peopleApi;

const PeopleApiHelper = {

    searchUser: function (userName) {
        // uncomment when api works again!
        // return ApiHelper.fetch(`${BASEURL}?search=${userName}`);

        // added to facilitate static data
        let filteredUser = Constants.dummyPeopleData.results.filter((person) => {
            return person.name.toLowerCase().includes(userName);
        });

        let response;

        if(filteredUser && filteredUser.length > 0 && filteredUser[0].name.length > 0) {
            response = {
                count: 1,
                results: [...filteredUser]
            };
        } else {
            response = {
                count: 0,
                results: []
            };
        }
        
        // delay in response
        return new Promise(resolve => setTimeout(resolve, 2000, response));
    }

}

export default PeopleApiHelper;