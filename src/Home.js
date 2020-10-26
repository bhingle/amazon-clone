import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://theross.ml/0:/project/banner2.jpg"
            alt="banner"
            />
           
          
            {/* product */}
            <div className="home__row">

            <Product
            id="1"
            title="Oppo A5 2020"
            price={11.96}
            rating={5}
            image="https://theross.ml/0:/project/Webp.net-resizeimage.jpg"
            />
            <Product
            id="2"
            title="The Alchemist"
            price={25}
            rating={5}
            image="https://theross.ml/0:/project/p2.jpg"
            />
            </div>
{/* todays edit */}
            <div className="home__row">

            <Product
            id="1"
            title="The Hobbit"
            price={11.96}
            rating={5}
            image="https://theross.ml/0:/project/p8.jpg"
            />
            <Product
            id="2"
            title="Wings of Fire"
            price={25}
            rating={5}
            image="https://theross.ml/0:/project/p7.jpg"
            />
             <Product
            id="2"
            title="The Madness of Sunshine"
            price={25}
            rating={5}
            image="https://theross.ml/0:/project/p6.jpg"
            />
            </div>

            <div className="home__row">

<Product
id="1"
title="Sony Bravia"
price={11.96}
rating={5}
image="https://theross.ml/0:/project/p4.jpg"
/>
<Product
id="2"
title="Saregama Carvaan"
price={25}
rating={5}
image="https://theross.ml/0:/project/p5.jpg"
/>
</div>
            
         

            

        </div>
    );
}

export default Home
