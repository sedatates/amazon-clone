import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
  <div className="home">


    <div className="home__container">

      <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="base"></img>

      <div className="home__row">
        <Product id="1" title='Corsair You Cant Hear All Sound But Still Expensive Headset' price='29,22' image="https://images-na.ssl-images-amazon.com/images/I/716vTg39ddL._AC_SL1500_.jpg"
        rating={5}
        />

        <Product id="2" title='DualSense 5 Exactly Same Thing With Ds4 But This One Looks Much Cool Wireless Controller' price='59,22' image="https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UY218_.jpg"
        rating={4}
        />

        <Product id="3" title='DualSense Wireless Controller Dock With Two Controller' price='140,22' image="https://m.media-amazon.com/images/I/71ywUrrVHFL._AC_UY218_.jpg"
        rating={5}
        />
      </div>

      <div className="home__row">
      <Product id="4" title='Iphone 12 Not That Much Magnetic Case' price='229,22' image="https://m.media-amazon.com/images/I/31oa1YucKIL._AC_UY218_.jpg"
        rating={5}
        />
        <Product id="5" title='Apple Extra Money Charger' price='59,22' image="https://m.media-amazon.com/images/I/61Okou83T0L._AC_UY218_.jpg"
        rating={1}
        />
        <Product id="6" title='Backlook' price='829,22' image="https://m.media-amazon.com/images/I/61SRQUe+LhL._AC_UY218_.jpg"
        rating={3}
        />
        <Product id="7" title='Circus Unicycle' price='123,4' image="https://images-na.ssl-images-amazon.com/images/I/61QHPBMQGIL._AC_SL1200_.jpg"
        rating={2}
        />
      </div>

      <div className="home__row">
        <Product id="8" title='Please Give Me A Job' price='1129,22' image="https://images-na.ssl-images-amazon.com/images/I/81rbQdqbDiL._AC_SL1500_.jpg"
          rating={1}
          />
      </div>
    
    </div> 


  </div>
  )
}

export default Home
