export const donorValidate = (donor) => {
    const errors = [];
    if(donor.name === ""){
        errors.push("please enter a valid name");
    }
    if(donor.mobileNo === ""){
        errors.push("please enter a valid mobile number");
    }
    if(donor.email === ""){
        errors.push("please enter a valid email");
    }
    if(donor.dob === ""){
        errors.push("please enter a valid date");
    }
    if(donor.city === ""){
        errors.push("please enter a valid city");
    }
    if(donor.password === ""){
        errors.push("please enter a valid password");
    }
    if(donor.profileImg === undefined){
        errors.push("please upload a valid profile picture");
    }
    if(donor.idImg === undefined){
        errors.push("please upload a valid id proof");
    }
    return errors;
}