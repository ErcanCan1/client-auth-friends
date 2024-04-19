import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginForm() {
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm({mode:"onChange"});

        const onSubmitLogin = (data) => {
         const config ={
            method:"post",
            url: "http:/localhost3000/api/login",
            headers: {
                "Content-Type": "application/json",
            }
            
         };
         axios(config)
         .then( function(res){
            console.log(JSON.stringify(res.data));
         })
         .catch(function (error){
            console.log(error);
         });
        }

        return(
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div>
                    <input type="text" placeholder="username" {...register("username", 
                    {required:"Bu alan zorunludur."})} />
                </div>
                <div>
                    <input type="password" placeholder="password" {...register("password", 
                    {required:"Bu alan zorunludur."})} />
                </div>
                <button type="submit">Login</button>
                </form>

            </div>
        )

}

