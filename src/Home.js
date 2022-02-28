import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://www.shopee365.com/media/codazon/slideshow/cache/1920x730/c/a/car-auto-parts-online-at-lowest-price.jpg"
        ></img>
      </div>
      <div className="home_row">
              <Product title=" Oil Filter " price={359} rating={5} image="
        https://5.imimg.com/data5/PI/IA/MY-21701725/car-engine-oil-filter-500x500.png" />
        <Product Product title="Air Filter " price={369} rating={4} image="
        https://mzwmotor.com/wp-content/uploads/2021/10/air-filter.png"/>
              <Product title="Brake Pad" price={1500} rating={3} image="https://autoretails.com/wp-content/uploads/2020/05/Brake-Pads.jpg"/>
      </div>
      <div className="home_row">
              <Product title="Cabin Air Filter" price={419} rating={3}
        image="https://www.shopee365.com/media/catalog/product/cache/a1d6199b8797d1adf27d00b7ce72a9f8/v/i/vir-cabin-air-filter-for-maruti-ertiga.jpg"      />
              <Product title="Engine Oil" price={2199} rating={4} image="https://m.media-amazon.com/images/I/71fn9y29lNL._SL1500_.jpg" />
              <Product title="Headlight" price={3221} rating={4} image="https://5.imimg.com/data5/JE/CK/MY-55835756/car-head-light-500x500.jpg"/>
        <Product title="Clutch Plate" price={4999} rating={4} image="https://5.imimg.com/data5/XA/AD/MY-1115200/clutch-plate-430mm-500x500.jpg" />
      </div>
      <div className="home_row">
              <Product title="Rear Light" price={2900} rating={5} image="https://cdn.shopify.com/s/files/1/1398/4647/products/skoda-laura-2009-to-2013-year-model-tail-rear-light-led-left-right-car-light-furper-680724_large.jpg?v=1611656041"/>
              <Product title="Wiper Blades" price={399} rating={3} image="https://wonderfulengineering.com/wp-content/uploads/2021/06/10-Best-Wiper-Blades-For-Honda-Accord-3.jpg" />
               <Product title="Side Mirror" price={3999} rating={4} image="https://m.media-amazon.com/images/I/51TBisr8pFL._SL1024_.jpg" />
      </div>
    </div>
  );
}

export default Home