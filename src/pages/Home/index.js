import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header/";
import Category, {categories, FilterCategory} from "../../components/Category";
import Carousel from "../../components/Carousel";


function Home() {

  return (
    <>
      <Header/>
      <Banner image="assori"/>
      <Container>

      {
        categories.map((category, index) => 
        <Category category={category} key={category}>
          <Carousel>
            {FilterCategory(index).map((video) => <Card id={video.id} key={video.id}/>)}
          </Carousel>
        </Category>  
        )
      }  
      </Container>
      <Footer/>
    </>
  );
}

export default Home;
