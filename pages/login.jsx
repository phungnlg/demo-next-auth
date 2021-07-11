import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { providers, signIn } from 'next-auth/client'

import CleanLayout from '@/layouts/clean'
import SvgIcon from '@/components/common/SvgIcon'

const LoginPage = ({ providers, baseUrl }) => {
  const [username, setUsername] = useState('test')
  const [password, setPassword] = useState('123456')
  const handleChangeUsername = (e) => setUsername(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)
  const router = useRouter()
  const query = router.query

  const onSignIn = (provider, params = {}) => {
    params.callbackUrl = query.callbackUrl ?? '/'
    signIn(provider, params)
  }

  return (
    <main className="h-screen font-mono bg-gray-100">
      <div className="container flex items-center justify-center h-full mx-auto">
        <div className="lg:w-1/3 md:w-1/2">
          <h1 className="mb-6 text-4xl font-bold text-center text-green-500">Login Next-Auth</h1>
          <div className="p-8 mb-6 bg-white border-t-4 border-green-500 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-600">Username (test)</label>
              <input value={username} onChange={handleChangeUsername}
                type="text" className="block w-full px-2 py-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-grey focus:border-green-600"
                placeholder="Your Username" />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-bold text-gray-600">Password (123456)</label>
              <input value={password} onChange={handleChangePassword}
                type="password" className="block w-full px-2 py-2 bg-white border border-gray-300 rounded shadow appearance-none hover:border-grey focus:border-green-600"
                placeholder="Your Password" />
            </div>

            <div className="flex flex-col space-y-4">
              <button onClick={() => onSignIn('demoCredentials', { username, password })}
                className="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-colors duration-300 rounded-md bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 group hover:bg-gray-800 focus:outline-none"
              >
                <span className="text-xl font-bold">Login</span>
              </button>
            </div>

            <div className="relative h-px my-10 bg-gray-300">
              <div className="absolute top-0 left-0 flex justify-center w-full -mt-3">
                <span className="px-4 text-gray-500 bg-white">Or Login Social</span>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {Object.values(providers).map(provider => provider.type !== 'credentials' && 
                <button key={provider.name} onClick={() => onSignIn(provider.id)}
                  className="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-colors duration-300 rounded-md bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 group hover:bg-gray-800 focus:outline-none"
                >
                  <SvgIcon svgName={provider.id} className="h-5" />
                  <span className="text-xl font-bold">Sign in with {provider.name}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

LoginPage.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    baseUrl: process.env.NEXTAUTH_URL
  }
}

LoginPage.layout = CleanLayout

export default LoginPage