const ApiHelper = {

    fetch: function(url) {
        return new Promise((resolve, reject)=>{ 
            return fetch(url)
            .then(res => res.json())
            .then(
                (response) => {
                    resolve(response)
                },
                (error) => {
                    reject(error)
                }
              );
        });
    }
}

export default ApiHelper;