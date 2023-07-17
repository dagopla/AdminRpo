export class User{
    constructor(
        {name,email,password,role,google,id,image}:{
            name:string,
            email:string,
            password?:string,
            role?:string,
            google?:boolean,
            id:string
            image?:string
        }     
    ){}
}
