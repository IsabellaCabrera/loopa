import { useNavigate } from "react-router";
import { Button } from "../Button";
import { UserRole } from "../Cards/UserRole";
import { useState } from "react";

export const SelectModeForm = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSelectRole = () => {
    if (!role) return; // nada seleccionado
    if (role === "seller") {
      navigate("/signup/seller");
    } else if (role === "customers") {
      navigate("/signup/customer");
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleSelectRole();
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 xl:gap-32">
        <UserRole
          img="sellerCard.webp"
          name="role"
          id="role-seller"
          title="Become a Seller"
          description="Share your food, grow your business, and join a community that values sustainability."
          value="seller"
          onChange={setRole}
        />
        <UserRole
          img="customerCard.webp"
          name="role"
          id="role-customer"
          title="I´m a Customer"
          description="Enjoy great meals while reducing waste and supporting local businesses."
          value="customers"
          onChange={setRole}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button secondary>Back</Button>
        <Button disabled={!role}>Next</Button>
      </div>
    </form>
  );
};
