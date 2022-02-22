export const receptorValidator = (receptor) => {
    var errorMsg = [];
    if(receptor.name===""){
        errorMsg.push("Please provide a valid name");
    }
    if(receptor.age===""){
        errorMsg.push("Please provide a valid age");
    }
    if(receptor.city===""){
        errorMsg.push("Please provide a valid city");
    }
    if(receptor.hospitalName===""){
        errorMsg.push("Please provide a valid hospital name");
    }
    if(receptor.noOfUnits===""){
        errorMsg.push("Please provide the number of units required");
    }
    if(receptor.mobileNo===""){
        errorMsg.push("Please provide a valid mobile number");
    }
    if(receptor.mailId===""){
        errorMsg.push("Please provide a valid mail-id");
    }
    if(receptor.conditionOfThePatient===""){
        errorMsg.push("Please provide the condition of the patient");
    }
    return errorMsg;
}