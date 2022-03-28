import Script from 'next/script'
import Head from 'next/head'
// import { useEffect } from "r"
import { useEffect } from 'react'
export default function Register() {
  useEffect(() => {
    let container = document.getElementById('container')

    setTimeout(() => {
      container.classList.add('sign-in')
    }, 200)
  }, [])

  const toggle = () => {
    let container = document.getElementById('container')
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
  }

  return (
    <>
      <Head>
        <script type="text/javascript" src="./code.js"></script>
      </Head>
      <div id="container" className="container">
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="number" placeholder="Enter aadhar card Number" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="number"
                    placeholder="Enter mobile number linked with aadhar card"
                  />
                </div>

                <button>Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onclick="toggle()" className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>

          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>

        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Log into sih portal</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Sign up</h2>
            </div>
          </div>
          {/* <!-- END SIGN UP CONTENT --> */}
        </div>
        {/* <!-- END CONTENT SECTION --> */}
      </div>
    </>
  )
}
