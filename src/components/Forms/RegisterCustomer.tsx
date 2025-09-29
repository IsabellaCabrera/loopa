import { Link } from "react-router";
import { Button } from "../Button";
import { Input } from "../Input";
import { useNavigate } from "react-router";

export const RegisterCustomer = () => {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col gap-6 ">
      <Link to={"/"}> <img src="/PeraLogo-amarillo.svg" alt="Pera logo"/></Link>
      <div>
        <h2 className=" text-4xl font-bold text-morado">Create an account!</h2>
        <p>Start exploring a new world of possibilities with incredible offers while taking care of our planet.</p>
      </div>
      <span className="h-[1px] bg-morado/20"> </span>
      <div className=" flex flex-col gap-4">
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
        <p className="text-morado underline cursor-pointer text-sm">
          Forgot password?
        </p>
      </div>
      <Button onClick={() => navigate("/customer/home")}>Log In</Button>
      <p className="flex items-center gap-2">
        Don't have an account?
        <span className="text-morado underline">
          <Link to={"/signup"}>Sign up</Link>
        </span>
      </p>
    </form>
  );
};
// en el boton uso el use navagte porque como no tiene navegacion propia porque no es una etiqueta link entonces traemos el ooh y le damos navegacion
// eso es navegacion programatica