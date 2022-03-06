
function check(donorType,receptorType){
    if(donorType==="O POSITIVE"){
        if(["O+","A+","B+","AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="A POSITIVE"){
        if(["A+","AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="B POSITIVE"){
        if(["B+","AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="AB POSITIVE"){
        if(["AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="O NEGATIVE"){
        return true;
    }
    if(donorType==="A NEGATIVE"){
        if(["A+","A-","AB+","AB-"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="B NEGATIVE"){
        if(["AB-","B-","B+","AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
    if(donorType==="AB NEGATIVE"){
        if(["AB-","AB+"].includes(receptorType)){
            return true;
        }
        else{
            return false;
        }
    }
}



module.exports = check;