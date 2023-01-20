import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'

const Fruit = () => {
    const [meals, setMeals] = useState([])
    const[photo,setPhoto]=useState()
    const products = []
    const allMealsUrl = 'http://localhost:4000/api/v1/products'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'




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

      const handleclick=(id)=>{
        document.location.replace("http://localhost:3000/quote")

      }
  return (
    <>
    <div class ="fruit-gallery">

    <div class="fruit-banner-row-1">
        <h2>Buy Fresh Fruits</h2>
    </div>
    <div class="fruit-row">
    {meals.map((product) => {
    const { _id, name: title,photos: [{secure_url}],description } = product
    //console.log(photos)

    return(
        <div class ="fruit-card" onClick={handleclick(_id)}>
            <img src={secure_url} alt="Spring onion"/>
            <h4>{title}</h4>
            <p>
           {description}
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>
    )})}
        <div class ="fruit-card">
            <img src="static/corainder.jpeg" alt="Corainder"/>
            <h4>Opulent Onions</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>

        <div class ="fruit-card">
            <img src="static/spinach.jpeg" alt="Spinach"/>
            <h4>Calm Carrot</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>

        <div class ="fruit-card">
            <img src="static/corainder.jpeg" alt="Corainder"/>
            <h4>Opulent Onions</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>

        <div class ="fruit-card">
            <img src="static/corainder.jpeg" alt="Corainder"/>
            <h4>Opulent Onions</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>

        <div class ="fruit-card">
            <img src="static/corainder.jpeg" alt="Corainder"/>
            <h4>Opulent Onions</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>
        </div>

        <div class ="fruit-card">
            <img src="static/cabbage2.jpg" alt="Cabbage"/>
            <h4>Classic Cabbage</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>

        </div>
        <div class ="fruit-card">
            <img src="static/onion2.jpg" alt="Onion"/>
            <h4>Opulent Onions</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>

        </div>

        <div class ="fruit-card">
            <img src="static/carrot.jpeg" alt="Carrot"/>
            <h4>Calm Carrot</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Add to Cart</a>

        </div>
        
    </div>
    </div>
    </>
  )
}

export default Fruit;