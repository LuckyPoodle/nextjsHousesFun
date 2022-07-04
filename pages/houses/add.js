import {loadIdToken} from "../../auth/firebaseAdmin";
import HouseForm from "../../components/houseForm";
import React from 'react'

const Add = () => {
  return (
    <>
      <HouseForm />
    </>
  )
}


export async function getServerSideProps({req,res}){
  
    const uid=await loadIdToken(req);

    if (!uid){
        res.setHeader("location","/auth");
        res.statusCode=302;
        res.end();

    }

    return {props:{}};


}

export default Add