import { SelectModeForm } from "../components/Forms/SelectModeForm";

export const SignUp = () => {

  return (
    <section className="md:my-0 my-8 mx-8 md:mx-32 lg:mx-40 xl:mx-40 flex flex-col justify-center md:h-screen">

      <div className="mb-9">
        <h2 className="font-bold text-primary text-3xl">Select User Type</h2>
        <p>Choose how you want to be part of the community</p>
      </div>
      <SelectModeForm />
    </section>
  );
};
