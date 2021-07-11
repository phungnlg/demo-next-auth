import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

const Header = (props) => {
  const [ session, loading ] = useSession()
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="z-10 flex mr-auto text-nuxt-gray h-7 lg:h-10"
              >
                <img id="logo" src="/logo.png" alt="logo" className="h-6 transition-colors duration-300 ease-linear lg:h-10" />
                <span className="inline-flex items-center justify-center pl-2 text-xl font-bold leading-none text-green-700 lg:text-2xl">AgileOps</span>
              </a>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              {!session && <>
                <li className="flex items-center mr-4 font-medium text-yellow-600">
                  ✨ Need sign in to view profile ✨✨✨
                </li>
                <li className="flex items-center">
                  <a
                    href={`/login`}
                    className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-800 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0"
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    Sign in
                  </a>
                </li>
              </>}
              {session && <>
                <li className="flex items-center mr-4 font-medium text-gray-900 hover:text-gray-500">
                  <Link href="/profile">
                    <a className="flex">
                      {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className="mr-2 bg-no-repeat bg-cover rounded-full h-7 w-7" />}
                      Profile
                    </a>
                  </Link>
                </li>
                <li className="flex items-center">
                  <a
                    href={`/api/auth/signout`}
                    className="px-4 py-2 mb-3 ml-3 text-xs font-bold text-black uppercase transition-all duration-150 ease-linear bg-yellow-300 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0"
                    onClick={(e) => {
                      e.preventDefault()
                      signOut()
                    }}
                  >
                    Sign out
                  </a>
                </li>
              </>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header 