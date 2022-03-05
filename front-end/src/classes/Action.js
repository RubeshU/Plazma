class Action {
    getCurrentDonation(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/donor/current",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("token"),
                    },
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
    getProfile(){
        return new Promise(async (resolve,reject) => {
            try{
                if(localStorage.getItem("token")===null) return;
                const response = await fetch("http://localhost:4000/plazma/donor/profile",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("token"),
                    },
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
    getHistory(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/donor/history",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("token"),
                    },
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
    donate(donorId){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/donor/donate",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("token"),
                    },
                    body: JSON.stringify(donorId),
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
    confirm(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/donor/confirm",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "authorization": "Bearer "+localStorage.getItem("token"),
                    },
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
}

export default Action;