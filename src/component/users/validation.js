export const userValidation =(user)=> {

let errors = {}

if (user.name.trim() == ""){
errors.name=" UserName is required !"
    
}else if (user.name.trim().length < 3 )
errors.name=" UserName must contain at least 3 character !"



if (user.email.trim() == ""){
    errors.email=" email is required !"
        
    }else if (user.email.trim().length < 9 )
    errors.email=" email must contain at least 9 character !"



    if (user.password.trim() == ""){
        errors.password=" password is required !"
            
        }else if (user.password.trim().length < 3 )
        errors.password=" password must contain at least 3 character !"


return errors

}