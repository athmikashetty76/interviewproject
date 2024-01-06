import React from "react";
import Menubar from "../components/Menubar";
import NavigationBar from "../components/NavigationBar";
import Categories from "../components/Categories";
import Others from "../components/Others";
import Footer from "../Home/Footer"
import SpecialOffers from '../components/SpecialOffers';
import { Carousel } from "../components/Crousel";
import { other_images } from "../utils/images";
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Menubar />
      <NavigationBar />
      <div className="max-w-container mx-auto px-4">
        <Categories />
        <Carousel data={other_images}/>
        <Others />
        <SpecialOffers/>
        <Footer/>
        
      </div>
    </div>
  );
};

export default Home;
