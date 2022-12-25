import { useEffect, useState } from "react";


const Home = () => {
    const [imgNasa, setImgNasa] = useState([])

    const apiEndpoint = `https://api.nasa.gov/planetary/apod?api_key=X0z2cvLtkmAv3WVcQJihlSMQL6WG9fwau5Dv9yVp`;

    useEffect((props) => {
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => setImgNasa(data))
           
            .catch((err) => {
                console.log(err.message);
             });
      
    },[])    

    return (
    <>
        <h1 className="tituloNasa">La imagen del día</h1>
       <img id="imagenNasa" src={imgNasa.url}/>
    </>
    );
  };
  
  export default Home;