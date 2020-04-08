import PeopleApiHelper from '../api-helpers/peopleapi-helper';
import ErrorEnumerators from '../enums/error-enum';

const PeopleHelper = {
    login: function(userName) {
            return new Promise((resolve, reject)=>{ 
                PeopleApiHelper.searchUser(userName)
                .then(
                    (result) => {
                        if(result.count === 1) {
                            resolve(result.results[0]);
                        } else {
                            reject(ErrorEnumerators.notFoundError);
                        }
                    },
                    (error) => {
                        // hiding error details
                        reject(ErrorEnumerators.unexpectedError);
                    }
                );
            });
    }
}

export default PeopleHelper;