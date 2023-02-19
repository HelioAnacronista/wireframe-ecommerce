function login() {
  return (
    <section className="gradient-form bg-gray-200 h-full md:h-screen">
      <div className="container h-full py-12 px-6">
        <div className="g-6 text-gray-800 flex h-full flex-wrap items-center justify-center">
          <div className="xl:w-10/12">
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="/images/produto-img.svg"
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                        We are company name
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control text-gray-700 bg-white border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 m-0 block w-full rounded border border-solid bg-clip-padding px-3 py-1.5 text-base font-normal transition ease-in-out focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control text-gray-700 bg-white border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 m-0 block w-full rounded border border-solid bg-clip-padding px-3 py-1.5 text-base font-normal transition ease-in-out focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-12 pt-1 pb-1 text-center">
                        <button
                          className="text-white hover:bg-blue-700 mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">
                          Forgot password?
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">
                          <a href="register">Don't have an account?</a>
                        </p>
                        <button
                          type="button"
                          className="hover:bg-black inline-block rounded border-2 border-red-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-red-600 transition duration-150 ease-in-out hover:bg-opacity-5 focus:outline-none focus:ring-0"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Danger
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center rounded-b-lg bg-blue-violet-600 lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="px-4 py-6 text-white-900 md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;
