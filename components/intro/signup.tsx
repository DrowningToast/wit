import {
  ConditionalRedirect,
  handleLoginWithEmail,
  handleRegisterWithEmail,
  signinEmail,
} from "@fb/auth";
import { User } from "firebase/auth";
import { useForm, NestedValue, useFormState } from "react-hook-form";

interface props {
  state: "signin" | "signup" | null;
  setState: React.Dispatch<React.SetStateAction<"signin" | "signup" | null>>;
}

const Signup: React.FC<props> = ({ state, setState }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data: any) => {
    try {
      await handleRegisterWithEmail(data.email, data.password, data.username);
      console.log("suscess");
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  return (
    <>
      {state === "signup" && (
        <div className="text-primary w-80 mb-16">
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="w-full h-full flex flex-col justify-around items-start"
          >
            <h4 className="font-helvetica font-bold text-xl mt-3">Email</h4>
            <input
              {...register("email", {
                required: "Please enter your email",
              })}
              type="email"
              className="font-helvetica w-full py-3 rounded-xl px-2 border-primary border-2 focus:border-2 bg-dark"
            />
            {errors.email && (
              <small className="text-red-500 font-helvetica transform -translate-y-2">
                {errors.email.message}
              </small>
            )}
            <h4 className="font-helvetica font-bold text-xl mt-3">Username</h4>
            <input
              {...register("username", {
                required: "Please enter your username",
              })}
              type="text"
              className="font-helvetica w-full py-3 rounded-xl px-2 border-primary border-2 focus:border-2 bg-dark"
            />
            {errors.username && (
              <small className="text-red-500 font-helvetica transform -translate-y-2">
                {errors.username.message}
              </small>
            )}
            <h4 className="font-helvetica font-bold text-xl mt-3">Password</h4>
            <input
              {...register("password", {
                required: "Please enter your password",
              })}
              type="password"
              className="font-helvetica w-full py-3 rounded-xl px-2 border-primary border-2 focus:border-2 bg-dark"
            />
            {errors.password && (
              <small className="text-red-500 font-helvetica transform -translate-y-2">
                {errors.password.message}
              </small>
            )}
            <div className="mt-11">
              {errors.agree && (
                <small className="text-red-500 font-helvetica transform -translate-y-2">
                  {errors.agree.message}
                </small>
              )}
              <div className="flex gap-x-1.5 items-center mb-0.5 ">
                <input
                  className="inline bg-primary border-0 "
                  type="checkbox"
                  {...register("agree", {
                    required:
                      "You must agree to our terms of services to proceed",
                  })}
                  required
                />
                <h5 className="inline font-helvetica font-semibold text-sm text-witpink">
                  I agree to your terms of services
                </h5>
              </div>
            </div>
            <button
              type="submit"
              className="font-bold w-full py-3 bg-primary text-2xl text-dark font-helvetica rounded-xl"
            >
              Sign up
            </button>
            <h5 className="font-helvetica  text-witpink mt-2 font-bold text-center inline-block w-full">
              Doesn't have an account?{" "}
              <span
                onClick={() => setState("signin")}
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

export default Signup;
