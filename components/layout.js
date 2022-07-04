import React,{useContext, useEffect} from 'react'
import Link from 'next/link';
import  { useRouter} from "next/router";
import { AuthContext } from "../auth/useAuth";
import firebase from "../auth/initFirebase";

const Layout = ({main}) => {

  const {state:{authenticated},dispatch}=useContext(AuthContext);
  const router=useRouter();


  const handleLogoutClick=()=>{


    firebase.auth().signOut().then(()=>{
      router.push('/');
    }).catch((e)=>{
        console.log(e);
    });
    dispatch({ type: 'LOGOUT' })
  }

  useEffect(()=>{

    
    authenticated?console.log('is true'):console.log('is false')

  },[])


  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800" style={{ height: "64px" }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img
                src="/home-color.svg"
                alt="home house"
                className="inline w-6"
              />
            </a>
          </Link>
          {authenticated ? (
            <>
              <Link href="/houses/add">
                <a>Add House</a>
              </Link>
              <button onClick={handleLogoutClick}>Logout</button>
            </>
          ) : (
            <Link href="/auth">
              <a>Login/Signup</a>
            </Link>
          )}
        </div>
      </nav>
   
      <main style={{ minHeight: "calc(100vh - 64px)" }}>{main}</main> 
      {/* 64 because it is what we set for the nav */}
    </div>
  )
}

export default Layout