import { handleLoginWithEmail, signinEmail } from "@fb/auth";
import { useForm, NestedValue, useFormState } from "react-hook-form";

interface props {
  state: "signin" | "signup" | null;
  setState: React.Dispatch<React.SetStateAction<"signin" | "signup" | null>>;
}

const Signin: React.FC<props> = ({ state, setState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignin = async (data: any) => {
    try {
      await handleLoginWithEmail(data.email, data.password);
      console.log("suscess");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {state === "signin" && (
        <div className="text-primary w-80 mb-16">
          <form
            onSubmit={handleSubmit(handleSignin)}
            className="w-full h-full flex flex-col justify-around items-start"
          >
            <h4 className="font-helvetica text-xl mt-3 font-bold">Email</h4>
            <input
              {...register("email", {
                required: "Please enter your email",
              })}
              type="email"
              className="font-helvetica w-full py-3 rounded-xl px-2 border-primary border-2 focus:border-2 bg-dark"
            />
            {errors.email && (
              <small className="text-red-500 font-helvetica transform ">
                {errors.email.message}
              </small>
            )}
            <h4 className="font-helvetica text-xl mt-3 font-bold">Password</h4>
            <input
              {...register("password", {
                required: "Please enter your password",
              })}
              type="password"
              className="font-helvetica w-full py-3 rounded-xl px-2 border-primary border-2 focus:border-2 bg-dark"
            />
            {errors.password && (
              <small className="text-red-500 font-helvetica transform ">
                {errors.password.message}
              </small>
            )}
            <button
              type="submit"
              className="font-bold mt-11 w-full py-3 bg-primary text-2xl text-dark font-helvetica rounded-xl"
            >
              Sign in
            </button>
            <h5 className="font-helvetica text-witpink mt-2 font-bold text-center inline-block w-full">
              Doesn't have an account?{" "}
              <span
                onClick={() => setState("signup")}
                className="cursor-pointer text-secondary"
              >
                Sign up
              </span>
            </h5>
          </form>
        </div>
      )}
    </>
  );
};

export default Signin;
