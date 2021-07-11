const Footer = () => {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-green-700">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-green-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto text-gray-200">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
              <h5 className="mt-0 mb-2 text-lg">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <a
                  className="inline-flex items-center justify-center w-10 h-10 mr-2 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none hover:bg-gray-200 align-center focus:outline-none"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center w-10 h-10 mr-2 font-normal text-blue-500 bg-white rounded-full shadow-lg outline-none hover:bg-gray-200 align-center focus:outline-none"
                  href="#"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="inline-flex items-center justify-center w-10 h-10 mr-2 font-normal text-gray-900 bg-white rounded-full shadow-lg outline-none hover:bg-gray-200 align-center focus:outline-none"
                  href="https://sinhnt.com"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-bold text-white uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold hover:text-gray-400"
                        href="https://sinhnt.com/"
                        target="_blank"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold hover:text-gray-400"
                        href="https://github.com/nguyentrisinh"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-white">
                Copyright © {new Date().getFullYear()} {" "}
                <a
                  href="https://sinhnt.com/"
                  className="text-white hover:text-gray-400"
                >
                  Sinh NT
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default  Footer