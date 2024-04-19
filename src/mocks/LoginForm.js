import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginForm() {
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm({mode:"onChange"});

        const onSubmitLogin = (data) => {
            axios.post("http://localhost3000/api/login". data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
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