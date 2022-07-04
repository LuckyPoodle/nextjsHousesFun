import {useState,useEffect} from "react";
import {useForm} from "react-hook-form";
import SearchBox from "../components/searchBox"
import Link from "next/link"




export default function HouseForm({}){
    const [submitting,setSubmitting]=useState(false);
    const [previewImage,setPreviewImage]=useState("")
    const { register, handleSubmit,setValue,formState: { errors },watch } = useForm({defaultValues:{
      address:'',
    latitude:0,
    longitude:0,
    bedrooms:0,
    image:null,
    }});
    const address =watch("address");

      const handleCreate=async(data)=>{

      }


      const onSubmit = (e,data) => {
        e.preventDefault();
        alert(JSON.stringify(data));
        handleCreate(data);
      };

      // useEffect(()=>{
      //   register({name:"address"},{required:"Please enter your address"});
      //   register({name:"latitude"},{required:true,min:-90,max:90});
      //   register({name:"longitude"},{required:true,min:-180,max:180});

      // },[register]);

    return <form className="mx-auto max-w-xl py-4 text-white" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl"> Add a new house</h1>

            <div className="mt-4">
              <label htmlFor="search" className="block">Search for your address</label>
            </div>

            <SearchBox onSelectAddress={(address,latitude,longitude)=>{
              setValue("address",address);
              setValue("latitude",latitude);
              setValue("longitude",longitude);
            }} defaultValue="" />

 

          {address && (
            <>
             <div className="mt-4">
             <label htmlFor="image" className="p-4 border-dashed border-4 border-gray-600 block cursor-pointer">Click to add image</label>
             <input {...register("image")} onChange={(event)=>{
               if (event.target.files[0]){
                 const file=event.target.files[0];
                 const reader=new FileReader();
                 reader.onloadend=()=>{
                   setPreviewImage(reader.result);
                   setValue("image",reader.result);
                 }
                 reader.readAsDataURL(file);

               }
             }} id="image" name="image" accept="image/*" type="file" style={{display:"none"}}/>

             {previewImage && (
               <img src={previewImage} className="mt-4 object-cover" style={{width:"576px", height:`${(9/16)*576}px`}} />
             )}
   
           
           </div>
           <div className="mt-4">
            <label htmlFor="bedrooms" className="block">
              Beds
            </label>
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              className="p-2"
              {...register("bedrooms",{ min: {value:0,message:"Cannot have negativity"}, max: {value:99,message:"Max reached"} })}
            />
            {errors.bedrooms? <p>{errors.bedrooms.message}</p>:<></>}
       
          </div>

          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" type="submit" disabled={submitting}>Save</button>
            {" "}
          </div>
          <Link href="/"><a>Cancel</a></Link>
</>
          )}
           

     
    </form>


}
