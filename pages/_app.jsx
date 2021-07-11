import React from "react"
import App from 'next/app'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

import LayoutDefault from '@/layouts/default'

import '@/assets/styles/tailwind.css'
import '@/assets/styles/globals.scss'

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`
=========================================================
* Demo NextJS
=========================================================
`)
    document.insertBefore(comment, document.documentElement)
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || LayoutDefault

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Demo Next Auth</title>

          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href='/favicon.ico'
          />
        </Head>
        <Provider
          options={{
            clientMaxAge: 0,
            keepAlive: 0
          }}
          session={pageProps.session} >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    )
  }
}