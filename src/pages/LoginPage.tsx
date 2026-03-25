import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const logInFormSchema = z.object({
    userName: z.string()
        .min(1, { message: 'Please enter a user name' }),
    password: z.string()
        .min(1, { message: 'Please enter a password' }),
});


type logInFormSchemaType = z.infer<typeof logInFormSchema>;


const LoginPage = () => {
   /*  const form = useForm<logInFormSchemaType>({resolver: zodResolver(logInFormSchema)}); */

    return (
        <div className="flex items-center flex-1 justify-center ">
            <Container className="flex flex-col items-center justify-center w-fit h-fit bg-form-bg">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl text-sid-bar-primary-text ">Log In</h1>
                    <p className="text-primary">Welcome back! Please enter your details</p>
                </div>
                <form className="flex flex-col w-96 gap-4 py-6">
                    <Input name='username' label='Username' placeholder='Enter User Name....' />
                    <Input name='password' label='Password' type="password" placeholder='Enter User Pass....' />
                    <Button type="submit" variant="form" className="w-full hover:bg-primary-light">Submit</Button>
                </form>
            </Container>
        </div>

    );
};

export default LoginPage;