import { CiUser } from "react-icons/ci";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">Choose the type of account you'd like to create.</p>
        </div>
        <div className="grid gap-4">
          <div className="flex justify-between space-x-8">
          <div className="flex flex-col items-center justify-center gap-4 p-8 border-solid border-black rounded-lg border-2 transition-transform duration-300 hover:scale-105">
  <CiUser className="h-12 w-12 text-gray-500 dark:text-gray-400" />
  <div className="text-center space-y-2">
    <h2 className="text-xl font-semibold">Sign Up as a Customer</h2>
    <p className="text-gray-500 dark:text-gray-400">
      Create an account to access our services as a customer.
    </p>
  </div>
  <button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors bg-black focus:ring-gray-950 disabled:opacity-50">
    Sign Up
  </button>
</div>

<div className="flex flex-col items-center justify-center gap-4 p-8 border-solid border-black rounded-lg border-2 transition-transform duration-300 hover:scale-105">
  <CiUser className="h-12 w-12 text-gray-500 dark:text-gray-400" />
  <div className="text-center space-y-2">
    <h2 className="text-xl font-semibold">Sign Up as a Provider</h2>
    <p className="text-gray-500 dark:text-gray-400">
      Create an account to offer your services as a provider.
    </p>
  </div>
  <button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors bg-black focus:ring-gray-950 disabled:opacity-50">Sign Up</button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
