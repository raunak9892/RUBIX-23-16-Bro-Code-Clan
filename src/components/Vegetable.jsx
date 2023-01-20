import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Vegetable = () => {
    const [meals, setMeals] = useState([])
    const[photo,setPhoto]=useState()
    const products = []
    const allMealsUrl = 'http://localhost:4000/api/v1/products'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


const history = useHistory()

    const fetchMeals = async () => {
      //  setLoading(true)
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzdiM2RiZDE1MjdhZjQ3ZDY5MGNlMyIsImlhdCI6MTY3NDEzNjQxOCwiZXhwIjoxNjc0Mzk1NjE4fQ.EwOsuo_gij9c957UragBCcQ9K5B8Y-YHicMP1ZpBzHo"
                  }
            };
          const { data } = await axios.get(allMealsUrl,config)
          console.log(data.products);



          setMeals(data.products);
          if(data){
           
            console.log(data)
          }
          
         
        }
        catch (e) {
    
          console.log(e.response)
        }
       
      }
    
      useEffect(() => {
        fetchMeals(allMealsUrl)
      }, [])
      const clicked=(id)=>{
        document.location.replace("http://localhost:3000/quote")

      }
      const handleclick=(id)=>{
        if(id!=0){
          history.push("/quote");
        }

       

      }

  return (
    <div class ="vege-gallery">

<div class="vege-banner-row-1">
    <h2>Buy Fresh Vegetables</h2>
</div>
<div class="vege-row">
{meals.map((product) => {
    const { _id, name: title,photos: [{secure_url}],description } = product
    //console.log(photos)

    return(
        <div class ="vege-card" >
            <img src={secure_url} alt="Spring onion" />
            <h4>{title}</h4>
            <p>
           {description}
            </p>
            <a href = "http://localhost:3000/quote" class="btn" onClick={handleclick(_id)} >Add to Cart</a>
        </div>
    )})}
    <div class ="vege-card">
        <img src="static/v-spring onion.jpg" alt="Spring onion"/>
        <h4>Cabbage</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-corainder.jpeg" alt="Corainder"/>
        <h4>Onions</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-spinach.jpeg" alt="Spinach"/>
        <h4>Carrot</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-tomato.jpeg" alt="Corainder"/>
        <h4>Onions</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-potato.jpeg" alt="Corainder"/>
        <h4>Onions</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-cabbage2.jpg" alt="Corainder"/>
        <h4>Onions</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>
    </div>

    <div class ="vege-card">
        <img src="static/v-eggplant.jpg"alt="Cabbage"/>
        <h4>Cabbage</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>

    </div>
    <div class ="vege-card">
        <img src="static/v-onion2.jpg" alt="Onion"/>
        <h4>Onions</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>

    </div>

    <div class ="vege-card">
        <img src="static/v-carrot.jpeg" alt="Carrot"/>
        <h4>Carrot</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
            quibusdam eveniet, eligendi deleniti dolores dolore odit, 
            quas labore doloremque! Optio tempora ratione aperiam?
        </p>
        <a href = "quote.html" class="btn">Add to Cart</a>

    </div>
</div>
</div>
  )
};

export default Vegetable;