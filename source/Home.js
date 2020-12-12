import React from 'react'
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            {/* Products id, title, price, rating, image */}
            <div className="home__row">
            <Product
            id="12345"
            title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY218_.jpg"
            />
            <Product
            id="123334245"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
            price={349.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SX679_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="1234111225"
            title="LG Ultra PC High Performance Laptop - 17 IPS WQXGA (2560 x 1600) ...."
            price={1698.66}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8182Y3AdSfL._AC_SL1500_.jpg"
            />
            <Product
            id="123455656"
            title="Kensington Universal Tablet and Laptop AC Charge Station (K62878NA)"
            price={254.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61toqj6DmtL._AC_SL1500_.jpg"
            />
            <Product
            id="123459098"
            title="Acer Spin 5 Convertible Laptop, 13.5 2K 2256 x 1504 IPS Touch, 10th Gen Intel Core i7-1065G7, 16GB..."
            price={1099.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61LHj2XV1wL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="12346775"
            title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65..."
            price={1696.99}
            rating={5}
            image="https://5.imimg.com/data5/RG/MI/MY-38646755/55-500x500.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="1235757845"
            title="LG Gram 2-in-1 Convertible Laptop: 14 Full HD IPS Touchscreen Display, Intel 10th Gen Core i7-10510U CPU...."
            price={1458.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81wunJkaBGL._AC_SL1500_.jpg"
            />
            <Product
            id="123688945"
            title="LG Gram Laptop - 15.6 Full HD IPS, Intel 10th Gen Core i5 (10210U CPU), 8GB DDR4 2666MHz RAM, 512GB NVMeTM SSD..."
            price={1210.16}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81pKKYJBeYL._AC_SL1500_.jpg"
            />
            <Product
            id="12345777"
            title="Thule Crossover 2 Laptop Bag 15.6, Black, 17.3 x 5.9 x 12.6 in"
            price={184.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71G7%2BFwQeTL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="1234577875"
            title="Solo New York Walker Rolling Laptop Bag - Fits Up to 15.6..."
            price={128.40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81mPlCKW-gL._AC_SL1500_.jpg"
            />
            <Product
            id="1237878945"
            title="RAM No-Drill Laptop Mount for '14-19 Chevrolet Silverado + More"
            price={254.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31z9G8YizUL._AC_.jpg"
            />
            <Product
            id="123899945"
            title="Everki Atlas Wheeled Backpack EKP122 Fits 13 To 17.3 Laptop"
            price={399.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8MWx76fL._AC_SL1500_.jpg"
            />
            </div>
            
            {/* Product */}
        </div>
    );
}

export default Home
