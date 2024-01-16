import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts , setPosts] = useState([]);

  async function fetchProductData() {
        
       setLoading(true);
     try{
          const result = await fetch(API_URL);
          const data = await result.json();
          console.log("inside Home page");
          console.log(data);
          setPosts(data);        
     }
     catch(error){
         console.log("Error ");
         setPosts([]);
     }
     setLoading(false)
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
   
    <div>
      {
          loading ? <Spinner/>:
          posts.length > 0 ?
          (
            <div>
              {
                 posts.map( (post) => (
                  <Product key ={post.id} post={post} />
                 ))
              }
            </div>  
          ):
          <div>
            <p>No Data Found</p>
          </div>  

      }
  </div>
  );
};

export default Home;
