import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'

import './quote.css'

const  Quote= (id) => {
    const [meals, setMeals] = useState({})
    const[photo,setPhoto]=useState()
    const products = []
   // const id = "63c7bbd042894795c7ce66df"
    let allMealsUrl = `http://localhost:4000/api/v1/product/63c7bbd042894795c7ce66df`
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
          console.log(data.product);



          setMeals(data.product);
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



  return (

    <>
     <div class="container">
      <div class="single-product">
          <div class="row">
              <div class="col-6">
                  <div class="product-image">
                      <div class="product-image-main">
                          <img src={meals.photos[0].secure_url} alt="" id="product-main-image"/>
                      </div>
                      
                  </div>
              </div>
              
                  <div class="product">
                      <div class="product-title">
                        {console.log(meals)}
                          <h2>{meals.name}</h2>
                      </div>
                      
                      <div class="product-price">
                          <span class="offer-price">INR{meals.price}</span>
                          <span class="sale-price">INR 129.00</span>
                      </div>

                      <div class="product-details">
                          <h3>Description</h3>
                          <p>{meals.description}</p>
                          
                      </div>
                      <div class="product-size">
                       
                          <h4>Best Sellers</h4>
                          <div class="size-layout">
                              <input type="radio" name="size" value="S" id="1" class="size-input"/>
                              <label for="1" class="size">Shaikh Farm</label>
                          </div>

                          
                        <div class="size-layout">
                          <input type="radio" name="size" value="S" id="3" class="size-input"/>
                          <label for="3" class="size">Savaliya farm</label>
                      </div>
                      <div class="size-layout">
                        <input type="radio" name="size" value="S" id="4" class="size-input"/>
                        <label for="4" class="size">Raikisani Farm</label>
                    </div>
                    <div class="product-quantity">
                      <label for="Quantity" name="quant">Quantity:</label>
                      <input type="number" id="fname" name="fname"/><br/>
                    </div>
                    <div class="product-btn-group">
                    <div class="button buy-now"><i class='bx bxs-zap' ></i> Buy Now</div>
                    </div>
                      </div>
                     
                      </div>
                      
          </div>
      </div>
  </div>

  <div class ="vege-gallery">

    <div class="vege-banner-row-1">
        <h2>People also buy</h2>
    </div>
    <div class="vege-row">
        <div class ="vege-card">
            <img src="static/v-spring onion.jpg" alt="Spring onion"/>
            <h4>Spring-Onion</h4>
            </div>  <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
                
            </p>
            
            <a href = "vegetable.html" class="btn">Explore</a>
        </div>

        <div class ="vege-card">
            <img src="static/orange.jpeg" alt="Corainder"/>
            <h4>Orange</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "fruit.html" class="btn">Explore</a>
        </div>

        <div class ="vege-card">
            <img src="static/corn2.jpeg" alt="Spinach"/>
            <h4>Corn</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perspiciatis aliquam iusto corrupti velit nihil nemo id, 
                quibusdam eveniet, eligendi deleniti dolores dolore odit, 
                quas labore doloremque! Optio tempora ratione aperiam?
            </p>
            <a href = "#" class="btn">Explore</a>
        </div>
      </div>
      
    </>
  )
}

export default Quote;