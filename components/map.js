import { useRef, useState } from "react";
 import Link from "next/link";
 import { Image } from "cloudinary-react";
 import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
 //import "mapbox-gl/dist/mapbox-gl.css";


 
 const Map = () => {

    const mapRef = useRef<ReactMapGL>(null);
    const [viewport, setViewport] = useState({
      latitude: 43,
      longitude: -79,
      zoom: 10,
    });


   return (
    <div className="text-black relative">
 <ReactMapGL
      {...viewport}
      style={{ width:"100%",
      height:"calc(100vh - 64px)"}}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onMove={(nextViewport) => setViewport(nextViewport)}
      ref={(instance) => (mapRef.current == instance)}
      minZoom={5}
      maxZoom={15}
      mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
    ></ReactMapGL>
  </div>
   )
 }
 
 export default Map