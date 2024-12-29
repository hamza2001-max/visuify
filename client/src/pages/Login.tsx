import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="my-10 py-10 flex justify-center xl:shadow-xl xl:rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="space-y-4 mb-4">
          <div className="text-3xl font-medium">Login</div>
          <p>Enter your details below to login to your account.</p>
        </div>
        <form
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
              className="border border-1 py-3 px-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="w-fit">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="border border-1 py-3 pl-2 pr-10 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="shadow-sm !mt-10 font-semibold text-lg border-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 border-black px-2 py-3 rounded-md"
          >
            Login
          </button>
          <p className="text-center">Don't have an account? <Link to="/signup" className="font-medium">SignUp</Link></p>
        </form>
      </div>
    </section>

  )
}

export default Login