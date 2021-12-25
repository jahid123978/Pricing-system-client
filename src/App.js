import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import First_page from './Pages/First_Page/First_page';
import Home from './Pages/Home/Home';
import Second_Page from './Pages/Second_Page/Second_Page';
import Third_Page from './Pages/Third_Page/Third_Page';
import { Swiper, SwiperSlide } from "swiper/react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);



function App() {
  return (
    <div className="App">
     
      <>
      <h2 style={{marginLeft: '150px'}}>WANT TO DISCUSS YOUR PROJECT IN DETAIL? <span style={{color: 'blue'}}>SCHEDULE A CALL HERE</span></h2>
    <Swiper pagination={{
  "type": "progressbar"
}} navigation={true} className="mySwiper">
  
  <SwiperSlide><First_page></First_page></SwiperSlide><SwiperSlide><Second_Page></Second_Page></SwiperSlide><SwiperSlide><Third_Page></Third_Page></SwiperSlide>
  </Swiper>
    </>
     
    </div>
  );
}

export default App;
