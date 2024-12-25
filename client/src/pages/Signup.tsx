import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters"),
});

type FormSchema = z.infer<typeof signupSchema>;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <section className="my-10 py-10 flex justify-center xl:shadow-lg xl:rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="space-y-4 mb-4">
          <h1 className="text-3xl font-medium">Signup</h1>
          <p>Enter your details below to create an account and get started.</p>
        </div>
        <button className="flex items-center space-x-2 border border-1 w-full px-24 py-4 rounded-md shadow-sm">
          <IconBrandGoogle />
          <p className="font-semibold">Continue with Google</p>
        </button>
        <button className="flex items-center space-x-2 border border-1 w-full px-24 py-4 rounded-md shadow-sm">
          <IconBrandGithub />
          <p className="font-semibold">Continue with Github</p>
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-full !mt-10"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="username" className="w-fit">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username..."
              {...register("username")}
              className="border border-1 py-3 px-2 rounded-md outline-none"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="w-fit">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email..."
              {...register("email")}
              className="border border-1 py-3 px-2 rounded-md outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="w-fit">
              Password
            </label>
            <div className="relative">
              <input
                type={!showPassword ? "password" : "text"}
                id="password"
                placeholder="Enter password..."
                {...register("password")}
                className="border border-1 py-3 pl-2 pr-10 rounded-md outline-none w-full"
              />
              {!showPassword && (
                <IconEye
                  className="absolute top-[14px] right-3 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
              {showPassword && (
                <IconEyeOff
                  className="absolute top-[14px] right-3 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="shadow-sm !mt-10 font-semibold text-lg border-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 border-black px-2 py-3 rounded-md"
          >
            Signup
          </button>
          <p className="text-center">Already have an account? <Link to="/login" className="font-medium">Login</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
