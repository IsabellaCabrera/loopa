import { LoginForm } from "../components/Forms/LoginForm";
import { Header } from "../components/Header/Header";

export const Login = () => {
  return (
    <>
      <Header />
      <section className="flex justify-between items-center h-screen">
        <div className="flex-1 px-5 sm:px-10 md:px-16 lg:px-24">
          <LoginForm />
        </div>
        <div className="hidden sm:block bg-[url(/Login.webp)] bg-cover bg-center bg-no-repeat w-1/2 h-full" />
      </section>
    </>
  );
};
