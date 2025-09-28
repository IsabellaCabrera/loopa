import { RegisterCustomer } from "../components/Forms/RegisterCustomer";

export const SignUpCustomer = () => {
  return (
    <section className="relative flex justify-center items-center sm:gap-14 md:gap-24 lg:gap-36  h-screen px-5 py-8 sm:px-10 md:px-16 lg:px-24">
      {/* Rectángulo azul al fondo */}

      <div className="flex-1">
        <RegisterCustomer/>
      </div>
      <div className="absolute bottom-0 hidden lg:block right-0 w-[48%] h-[340px] bg-azul -z-10 rounded-tl-[40px]" />
      <div className="hidden sm:block bg-[url(/public/customerRegister.webp)] bg-cover bg-center bg-no-repeat w-[40%] h-full rounded-[30px]" />
    </section>
  );
};
