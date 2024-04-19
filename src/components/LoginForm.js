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
            data: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
            
            
         };
         axios(config)
         .then( function(res){
            localStorage.setItem("token", res .data.token);
            console.log(JSON.stringify(res.data));
         })
         .catch(function (error){
            console.log(error);
         });
        }

        const token = localStorage.getItem("token");

        axios.create({
            headers:{
                Authorization: token,
            }
        });

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

