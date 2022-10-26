import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
import DotNet from '../../../assets/courses/.net.jpg';
import Cplusplus from '../../../assets/courses/cplusplus.jpeg';
import Java from '../../../assets/courses/java.png';
import Laravel from '../../../assets/courses/laravel.png';
import Mern from '../../../assets/courses/mern.png';
import Python from '../../../assets/courses/python.png';
import logo from '../../../assets/website-logo/logo.gif';
import './Home.css';
const Home = () => {
    return (
      <div>
        <div className="text-center header-details">
          <Image src={logo} className="w-75"></Image>
          <p className="mt-5 border border-white p-4 fw-bold">
            Do you want to be a Software Developer? Do you want to be ready for
            Job Interview? Are you new to Software Developer? Here you can be
            educate yourself for all the three criteria mentioned above!! Just
            go through our coursed and descriptions and enroll soon to cope up
            with the world to be prepared as developer.
          </p>
        </div>
        <h1 className="fw-bold mb-4">
      
          All the courses and interview preparations we are offering now!{" "}
        </h1>
        <div className="p-3 border border-dark mt-5">
          <Carousel className="slider">
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={Mern}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={Laravel}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={DotNet}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={Python}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={Java}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={Cplusplus}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Home;