# <h1 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Demo NextAuth NextJS</h1>
  
<h3 align="center" style="font-weight: bold; margin-top: 20px; margin-bottom: 20px;">Guide setup NextAuth for Nextjs with Tailwind CSS</h3>
  
<p align="center">
  <a href="https://github.com/nguyentrisinh/demo-next-auth"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/nguyentrisinh/demo-next-auth/build"></a>
  <a href="#last-commit"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/nguyentrisinh/demo-next-auth"></a>
  <a href="#node-current"><img alt="node-current" src="https://img.shields.io/node/v/next"></a>
  <a href="#license"><img alt="GitHub" src="https://img.shields.io/github/license/nguyentrisinh/demo-next-auth"></a>
</p>
  
<p align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Need Help?</a> •
  <a href="#about">About</a> •
  <a href="#license">License</a>
</p>
  
<br/>

## Introduction

1. You want integrated `NextAuth` to `NextJS` project.
2. This project will help you understand and can use social auth `Github/Google/Facebook` by `NextAuth`
  
**Demo NextAuth NextJS** is a small project for basic setup NextAuth for NextJS. And it will use UI farmwork [Tailwind CSS](https://tailwindcss.com/)

<br/>
  
## Key Features

- **[Next JS](https://nextjs.org/docs/getting-started)**
- **[NextAuth](https://next-auth.js.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Setup Tailwind for NextJS](https://github.com/nguyentrisinh/demo-nextjs-tailwindcss)**

<br/>
  
## Usage

```sh
# install libs
yarn
# run dev
yarn dev
# run prod
yarn build
yarn start
```

<br/>
  
## Getting Started

### **Structure**

```js
.
├── 📁 assets
│   ├── 📁 styles
│   ├── ├── 📝 tailwind.css
│   │   └── 📝 globals.scss
│   └── 📁 images
├── 📁 components
│   ├── 📁 common
│   └── 📁 partials
├── 📁 layouts
│   ├── 📁 components
│   └── 📝 default.jsx
├── 📁 pages
│   ├── 📝 _app.jsx
│   ├── 📝 _document.jsx
│   ├── 📝 index.jsx
│   ├── 📝 login.jsx
│   └── 📝 profile.jsx
├── 📁 public
├── 📝 .env
├── 📝 .env.development
├── 📝 .env.production
├── 📝 jsconfig.js
├── 📝 next.config.js
├── 📝 postcss.config.js
├── 📝 tailwind.config.js
└── 📝 README.md
```

<br/>

### **Prerequisites**

- [Node.js](https://nodejs.org/en)
- [yarn](https://yarnpkg.com/getting-started/install)

## Documentation

### **Prepare seting social app**

- 👉 [Github](https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app)
- 👉 [Google](https://console.developers.google.com/apis/credentials)
- 👉 [Facebook](https://developers.facebook.com/docs/facebook-login/web)

### **Configuration**

- Install lib

```bash
yarn add next-auth
```

### **Setup ENV**

- Add `.env.local`

```bash
ENV=development
NEXTAUTH_URL=http://localhost:3000
SECRET=
FACEBOOK_ID=
FACEBOOK_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
```

### **Setup NextAuth**

- Add `pages\api\auth\[...nextauth].js`

```js
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
```

- Update `pages/index.js`

```jsx
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
```

> 👏👏👏 Let Enjoy!!!

### **Performance and testing**

Any of testing activities and reports goes here.

<br/>

## Support
  
### **Get Help**
  
**You have a question or problem wasn't solved?** No worries! Just open up a new issue in the `GitHub issue tracker`. Please provide all information to reproduce your problem. If you don't have a GitHub account, you can [contact](#contact) me directly.
  
<br/>
  
## About

### **Known Issues**
  
 - none (that are reported)

<br/>
  
### **Contact**
  
If you haven't done so already, please check out [Get Help](#get-help) for the fastest possible help on your issue. Alternatively you can get in touch with me by:

- Email: nguyentrisinh0810@gmail.com
  
<br/>

## License

This project is proudly licensed under the [MIT license][git-license].

<!-- LINKS -->
<!-- in-line references: websites -->
[sinhnt.com]:https://sinhnt.com
[react-bootstrap]:https://react-bootstrap.github.io/

<!-- in-line references to github -->

[git-profile]:https://github.com/nguyentrisinh
[git-readme]:README.md
[git-license]:LICENSE.md