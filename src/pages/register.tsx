function register() {
  return (
    <>
      <div className="container">
        <div className="flex min-h-screen flex-col items-center bg-mainColor-50 pt-6 sm:justify-center sm:pt-0">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-mainColor-900">Logo</h3>
            </a>
          </div>
          <div className="mt-6 w-full overflow-hidden bg-white-900 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="name"
                  className="text-gray-700 undefined block text-sm font-medium"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:focus:outline-none focus:ring focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="text-gray-700 undefined block text-sm font-medium"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:focus:outline-none focus:ring focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="text-gray-700 undefined block text-sm font-medium"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:focus:outline-none focus:ring focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="text-gray-700 undefined block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 mt-1 block w-full rounded-md shadow-sm focus:focus:outline-none focus:ring focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <a
                  className="text-gray-600 hover:text-gray-900 text-sm underline"
                  href="#"
                >
                  Already registered?
                </a>
                <button
                  type="submit"
                  className="text-white bg-gray-900 border-transparent active:bg-gray-900 false ml-4 inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
