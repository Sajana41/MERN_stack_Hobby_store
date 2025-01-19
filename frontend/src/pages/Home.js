import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Planes"} heading={"Top's Planes"}/>
      <HorizontalCardProduct category={"Drones"} heading={"Popular Drones"}/>

      <VerticalCardProduct category={"Helicopters"} heading={"Helicopters"}/>
      <VerticalCardProduct category={"Brushless motors"} heading={"Brushless motors"}/>
      <VerticalCardProduct category={"Flight controllers"} heading={"Flight controllers"}/>
      <VerticalCardProduct category={"FPV"} heading={"FPV"}/>
      <VerticalCardProduct category={"Battery"} heading={"Best Battery"}/>
      <VerticalCardProduct category={"ESC"} heading={"Best ESC's"}/>
      <VerticalCardProduct category={"Radios"} heading={"Radios"}/>
      <VerticalCardProduct category={"DJI"} heading={"DJI"}/>
    </div>
  )
}

export default Home