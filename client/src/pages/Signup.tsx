import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type FormSchema = z.infer<typeof signupSchema>;

const Signup = () => {
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
    <div className="flex flex-col items-center space-y-4">
      <div>
        <h1 className="text-3xl font-semibold">Signup</h1>
        <p>Enter your details below to create an account and get started.</p>
      </div>
      <button className="flex items-center space-x-2 border border-1 p-2 rounded-md">
        <IconBrandGoogle />
        <p className="font-semibold">Continue with Google</p>
      </button>
      <button className="flex items-center space-x-2 border border-1 p-2 rounded-md">
        <IconBrandGithub />
        <p className="font-semibold">Continue with Github</p>
      </button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username..."
            {...register("username")}
            className="border border-1 p-2 rounded-md"
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email..."
            {...register("email")}
            className="border border-1 p-2 rounded-md"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password..."
            {...register("password")}
            className="border border-1 p-2 rounded-md"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="border border-1 p-2 rounded-md">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
