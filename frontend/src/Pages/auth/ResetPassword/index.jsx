import { Link } from "react-router-dom";

function resetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 ">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Enter the email address associated with your account and well send you a link to reset your password.
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600  dark:text-gray-50 dark:placeholder-gray-400"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
              type="submit"
            >
              Reset password
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <Link to="/loginc"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
            
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
export default resetPassword;