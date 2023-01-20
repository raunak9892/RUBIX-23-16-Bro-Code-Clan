import React from 'react'
import './style.css'

const Landing = () => {
  return (
    <>
    <nav id="navbar">
        
    <div id="logo">
        <img src="logo.png" alt="" srcset=""/>
    </div>
    <div class="checkbtn hamburger" id="icon">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
   
    </div>
    
    <ul class="nav-toggle">
        <li class="item"><a href="#home">Home</a></li>
        <li class="item"><a href="#">Shop</a></li>
        <li class="item"><a href="#">Customer Login</a></li>
        <li class="item"><a href="#">Farmer Login</a></li>
    </ul>
    
</nav>



<section id="home">
    <h1 class="h-primary">Welcome to Apna Market</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur modi deserunt perspiciatis culpa fugit odio
        distinctio animi magnam?</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, fuga.</p>

    <button class="btn"><a href="#about-container">Know More</a></button>
</section>



<section id="about-container">
  
    <div id="about">
        <div class="box">
            <img src="wheat-about.png" alt="" srcset=""/>
        </div>
        <div class="box">
            
            <h2 class="h-secondary center">About Our Project</h2>
            <p>We connect you directly to the farmers who do the hardwrok to get you the food you consume everyday. We eliminate the middle man who make profit from the farmers and give the advantage to the real entitles and worthy farmers!</p>
        </div>
    </div>
</section>



<section class="services-container">
    <h1>Our Services</h1>

    <div class="service-info">
        <div class="service-box">
            <img src="nomiddleman.png" alt="" srcset=""/>
            <h3>No Middle Man</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, accusantium.</p>

        </div>
        <div class="service-box">
            <img src="freshnnatural.png" alt="" srcset=""/>
            <h3>Fresh and Orgnic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, accusantium.</p>

        </div>
        <div class="service-box">
            <img src="logo2.png" alt="" srcset=""/>
            <h3>Straight out of the Farm</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, accusantium.</p>

        </div>
    </div>
</section>



<section class="shop">
    <h1>Best Sellers</h1>


    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="cards-wrapper">

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="onion.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Onion</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="potato.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Potato</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="carrot1.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Carrot</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="cards-wrapper">

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="wheat.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Wheat</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="rice.jpg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Rice</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card">
                        <div class="image-wrpapper">
                            <img src="tomato.jpeg" class="card-img-top" alt="..."/>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Tomato</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

   
    

  
</section>


<footer>
    <div class="footer-content">
        <h3>Farmer Trade</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium porro magni, magnam accusantium
            eaque culpa.</p>
        <ul class="socials">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
    </div>
    <div class="footer-bottom">
        <p>copyright &copy;2023 FarmTrade. designed by <span>ARY</span></p>
    </div>
</footer>
</>
  )
}

export default Landing