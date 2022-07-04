import Layout from "../components/layout";
import FirebaseAuth from "../components/firebaseAuth";

import {loadIdToken} from "../auth/firebaseAdmin";

export default function Auth(){
    return <Layout main={<FirebaseAuth />} />
}

export async function getServerSideProps({req,res}){
  
    const uid=await loadIdToken(req);

    if (uid){
        res.setHeader("location","/");
        res.statusCode=302;
        res.end();

    }

    return {props:{}};


}