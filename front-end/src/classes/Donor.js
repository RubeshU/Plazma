class Donor{
    Donor(){}
    register(donor){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/auth/register",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        donor,
                    )
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
    logout(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/auth/logout",{
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
    autoLogin(){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/auth/login",{
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
    login(obj){
        return new Promise(async (resolve,reject) => {
            try{
                const response = await fetch("http://localhost:4000/plazma/auth/login",{
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(obj),
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

export default Donor;