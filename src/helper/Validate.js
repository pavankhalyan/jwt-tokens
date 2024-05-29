
import toast from "react-hot-toast"


export async function usernameValidate(values){
    const errors =  usernameVerify({}, values); 
    return errors; 
}

function usernameVerify(error = {},values) {
    if(!values.username){
        error.username = toast.error("Username is Required...!")
    }else if(values.username.includes("")) {
        error.username = toast.error("Username is Invalid...!")
        }
        return error; 
}


export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors ;
}


function passwordVerify(error = {}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;

    if(!values.password){
        error.password = toast.error("password is required!");
    }else if(values.password.includes(" ")) {
        error.password = toast.error("wrong password")
    }else if (values.password.length < 4 ) {
        error.password = toast.error ("password must be more than 4 characters")
    }else if (!specialChars.test(values.password)){
        error.password = toast.error("password must contain atleast one special character")
    }

    return error;
}

export async function resetPasswordValidate(values) {
    const errors = passwordVerify({},values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("password not match...!")
    }

    return errors;
}

export async function registerValidate(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors
}

function emailVerify(error={},values) {
    if(!values.email) {
        error.email = toast.error("email is required...!");
    }else if(values.email.includes("")){
        error.email = toast.error(" invalid email");
    }else if ( !/\S+@\S+\.\S+/i.test(values.email)){
        error.email = toast.error("invalid email address...!")
    }
    return error;       
}

export async function profileValidate(values){
    const errors = emailVerify({},values);
    return errors;
}


 export async function firstnameValidate(values) {

 }

 function firstnameVerify(error={},values){

 }

export async function lastNameValidate(values) {

}

function lastNameVerify(error={},values){
    
}
