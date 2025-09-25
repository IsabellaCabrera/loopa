import { Link } from "react-router";
import { Button } from "../Button";
import { Input } from "../Input";

export const OrderNowForm = () => {
  return (
    <form className=" sm:w-1/2 flex flex-col gap-3">
      <h2 className="text-white text-xl mb-3">Order Now!</h2>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <Input
          type="search"
          name="orderNow"
          placeholder="Food, restaurants, shops, products..."
        />
        <Button>Order Now</Button>
      </div>
      <p className="text-white flex flex-col sm:flex-row sm:items-center gap-1 text-nowrap">
        Already have an account?
        <span>
          <Link className="text-secondary underline" to="/login">
            Log In
          </Link>
        </span>
      </p>
    </form>
  );
};
