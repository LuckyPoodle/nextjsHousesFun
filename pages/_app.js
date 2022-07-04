import Head from "next/head";
import {AuthProvider} from "../auth/useAuth";
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
     <AuthProvider>
     <Head>
          <title>Home Sweet Home!</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
     </AuthProvider>
    </>
  )
}

export default MyApp
