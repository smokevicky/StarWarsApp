import base from './base';
import ApiHelper from './api-helper';
import ApiConstants from './api-constants';
import Constants from '../enums/constants';

const BASEURL = base.baseUrl + ApiConstants.planetApi;

const PlanetApiHelper = {

    fetchAllPlanets: function (currentPage) {
        // uncomment when api works again!
        //return ApiHelper.fetch(`${BASEURL}?page=${currentPage && currentPage > 0 ? currentPage : 1}`);

        // added to facilitate static data
         return Promise.resolve(Constants.dummyPlanetsData);
    }   

}

export default PlanetApiHelper;