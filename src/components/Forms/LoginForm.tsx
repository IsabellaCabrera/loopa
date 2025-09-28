import { Link } from "react-router";
import { Button } from "../Button";
import { Input } from "../Input";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <h2 className="mb-3 text-center text-2xl font-bold text-primary">
        Welcome Back
      </h2>
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <p className="text-primary underline cursor-pointer">Forgot password?</p>
      <Button>Log In</Button>
      <p className="flex items-center gap-2">
        Don't have an account?
        <span className="text-primary underline">
          <Link to={"/signup"}>Sign up</Link>
        </span>
      </p>
    </form>
  );
};
 // en el boton uso el use navagte porque como no tiene navegacion propia porque no es una etiqueta link entonces traemos el ooh y le damos navegacion 
 // eso es navegacion programatica