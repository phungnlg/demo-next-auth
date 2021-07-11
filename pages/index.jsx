const HomePage = () => {
  return (
    <>
      <section className="relative flex items-center pt-24 pb-8 bg-green-700 header">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="py-2 text-white">
              <h2 className="text-4xl font-semibold">
                Demo Next-Auth
              </h2>
              
              <h4 className="mt-2 text-2xl font-bold leading-relaxed text-gray-300">
                Create a Next.js app
              </h4>
              <pre>{`
npx create-next-app
# or
yarn create next-app
              `}</pre>

              <h4 className="mt-2 text-2xl font-bold leading-relaxed text-gray-300">
                Install lib
              </h4>
              <pre>{`
yarn add next-auth
              `}</pre>

              <h4 className="mt-2 text-2xl font-bold leading-relaxed text-gray-300">
                Prepare social app
              </h4>
              <ul>
                <li>
                  <a href="https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app" target="_blank" 
                    className="font-bold text-gray-800"
                  >👉 Github</a>
                </li>
                <li>
                  <a href="https://console.developers.google.com/apis/credentials" target="_blank"
                    className="font-bold text-gray-800"
                  >👉 Google</a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/docs/facebook-login/web" target="_blank"
                    className="font-bold text-gray-800"
                  >👉 Facebook</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center pt-6 pb-16">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-2">
              <h4 className="mt-4 text-2xl font-bold leading-relaxed text-gray-900">
                Simple Setup
              </h4>

              <h4 className="mt-4 text-xl font-bold leading-relaxed text-gray-900">
                - Add `.env.local`
              </h4>
              <pre className="px-4 bg-gray-200 rounded-md">{`
ENV=development
NEXTAUTH_URL=http://localhost:3000
SECRET=
FACEBOOK_ID=
FACEBOOK_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
              `}</pre>

              <h4 className="mt-4 text-xl font-bold leading-relaxed text-gray-900">
                - Add `pages\api\auth\[...nextauth].js`
              </h4>
              <pre className="px-4 bg-gray-200 rounded-md">{`
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)
              `}</pre>

              <h4 className="mt-4 text-xl font-bold leading-relaxed text-gray-900">
                - Update `pages/index.js`
              </h4>
              <pre className="px-4 bg-gray-200 rounded-md">{`
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}
              `}</pre>

              <h4 className="my-8 text-2xl font-bold leading-relaxed text-green-600">
              👏👏👏 Let Enjoy!!!
              </h4>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage