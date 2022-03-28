import Script from 'next/script'
import Head from 'next/head'
// import { useEffect } from "r"
import { useEffect } from 'react'
export default function Register() {
  // useEffect(() => {
  //   let container = document.getElementById('container')

  //   setTimeout(() => {
  //     container.classList.add('sign-in')
  //   }, 200)
  // }, [])

  // const toggle = () => {
  //   let container = document.getElementById('container')
  //   container.classList.toggle('sign-in')
  //   container.classList.toggle('sign-up')
  // }

  return (
    // <>
    //   <Head>
    //     <script type="text/javascript" src="./code.js"></script>
    //   </Head>
    //   <div id="container" className="container">
    //     <div className="row">
    //       <div className="col align-items-center flex-col sign-up">
    //         <div className="form-wrapper align-items-center">
    //           <div className="form sign-up">
    //             <div className="input-group">
    //               <i className="bx bxs-user"></i>
    //               <input type="text" placeholder="Username" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bx-mail-send"></i>
    //               <input type="email" placeholder="Email" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bxs-lock-alt"></i>
    //               <input type="password" placeholder="Password" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bxs-lock-alt"></i>
    //               <input type="password" placeholder="Confirm password" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bxs-lock-alt"></i>
    //               <input type="number" placeholder="Enter aadhar card Number" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bxs-lock-alt"></i>
    //               <input
    //                 type="number"
    //                 placeholder="Enter mobile number linked with aadhar card"
    //               />
    //             </div>

    //             <button>Sign up</button>
    //             <p>
    //               <span>Already have an account?</span>
    //               <b onclick="toggle()" className="pointer">
    //                 Sign in here
    //               </b>
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col align-items-center flex-col sign-in">
    //         <div className="form-wrapper align-items-center">
    //           <div className="form sign-in">
    //             <div className="input-group">
    //               <i className="bx bxs-user"></i>
    //               <input type="text" placeholder="Username" />
    //             </div>
    //             <div className="input-group">
    //               <i className="bx bxs-lock-alt"></i>
    //               <input type="password" placeholder="Password" />
    //             </div>
    //             <button>Sign in</button>
    //             <p>
    //               <b>Forgot password?</b>
    //             </p>
    //             <p>
    //               <span>Don't have an account?</span>
    //               <b onClick={toggle} className="pointer">
    //                 Sign up here
    //               </b>
    //             </p>
    //           </div>
    //         </div>
    //         <div className="form-wrapper"></div>
    //       </div>
    //     </div>

    //     <div className="row content-row">
    //       <div className="col align-items-center flex-col">
    //         <div className="text sign-in">
    //           <h2>Log into sih portal</h2>
    //         </div>
    //         <div className="img sign-in"></div>
    //       </div>
    //       <div className="col align-items-center flex-col">
    //         <div className="img sign-up"></div>
    //         <div className="text sign-up">
    //           <h2>Sign up</h2>
    //         </div>
    //       </div>
    //       {/* <!-- END SIGN UP CONTENT --> */}
    //     </div>
    //     {/* <!-- END CONTENT SECTION --> */}
    //   </div>
    // </>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          {/* <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {' '}
              start your 14-day free trial{' '}
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {' '}
                Remember me{' '}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {' '}
                Forgot your password?{' '}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
