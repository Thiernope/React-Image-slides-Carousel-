import './App.css';
import Carousel from "react-elastic-carousel";
import ImageSlide from "./components/ImageSlide"
function App() {
  const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 600, itemsToShow: 2},
  {width: 900, itemsToShow: 3},
  {width: 1200, itemsToShow: 4}

  ]
    
  
  return (
    <div className="App">
     <h1>Image Slide with Carousel</h1>
      <Carousel breakPoints = {breakPoints}>
      <ImageSlide number = {<img src="https://res.cloudinary.com/dev-ltd/image/upload/v1614109428/Screen_Shot_2021-02-23_at_21.17.59_yhlo18.png" alt=""/>}/>
      <ImageSlide number ="2"/>
      <ImageSlide number ="3"/>
      <ImageSlide number ="4"/>
      <ImageSlide number ="5"/>
      <ImageSlide number ="6"/>
      <ImageSlide number ="7"/>
      <ImageSlide number ="8"/>
      </Carousel>
     
    </div>
  );
}

export default App;
