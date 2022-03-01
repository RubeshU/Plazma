class Receptor{
    Receptor() {}
    requestForBlood(receptor){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/receptor/request",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        receptor,
                    })
                });
                await response.json().then((data) => {
                    resolve(data);
                });
            }
            catch(error){
                reject(error);
            }
        });
    }

    checkStatus(referenceId){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/receptor/check",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        referenceId,
                    })
                });
                if(!response.ok){
                   await response.json().then((data) => {
                       throw Error(data.error);
                   });
                }
                await response.json().then((data) => {
                    resolve(data);
                });
            }
            catch(error){
                reject(error.message);
            }
        });
    }

    getReceptors(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/receptor/live-requests",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                await response.json().then((data) => {
                    resolve(data);
                });
            }
            catch{

            }
        })
    }

}

export default Receptor;