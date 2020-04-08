import PlanetApiHelper from '../api-helpers/planetapi-helper';
import ErrorEnumerators from '../enums/error-enum';

const PlanetHelper = {
    fetchAll: function(currentPage) {
            return new Promise((resolve, reject)=>{ 
                PlanetApiHelper.fetchAllPlanets(currentPage)
                .then(
                    (result) => {
                        if(result.count > 0) {
                            resolve(result);
                        } else {
                            reject(ErrorEnumerators.planetsNotFound);
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

export default PlanetHelper;