import { LoginInput, RegisterInput } from "../schema/user-schema"

export const validRegister = (inputs: RegisterInput) => {
    if(!inputs.username){
        return [{
            field: "username",
            message: "username is required"
        }]
    }

    if(!inputs.email){
        return [{
            field: "email",
            message: "email is required"
        }]
    }else if(!validateEmail(inputs.email)){
        return [{
            field: "email",
            message: "email format is invalid"
        }]
    }

    if(!inputs.password){
        return [{
            field: "password",
            message: "password is required"
        }]
    }else if(inputs.password.length < 8){
        return [{
            field: "password",
            message: "password should be atleast 8 characters"
        }]
    }

    return null
}

export const validLogin = (inputs: LoginInput) => {
    if(!inputs.username){
        return [{
            field: "username",
            message: "username is required"
        }]
    }

    if(!inputs.password){
        return [{
            field: "password",
            message: "password is required"
        }]
    }

    return null
}


const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}