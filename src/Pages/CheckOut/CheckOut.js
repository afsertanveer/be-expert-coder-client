import React from 'react';
import { FaKey } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Courses/CourseCard/CourseCard';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course);
    return (
      <div className="container">
        <h1>Buy This course and get service for lifetime on every update</h1>

        <div className='me-5 d-lg-flex justify-lg-content-center align-items-center'>
          <CourseCard course={course}></CourseCard>
          <div className='ms-5'>
            <label>Price</label>
            <input type="text" className='p-2 w-25 text-primary fw-bolder d-block mb-4' name="" value="30$" id="" readOnly />
            <button className=" py-2 px-4 rounded-2 buy-button">
              <FaKey className='text-white' style={{ fontSize: "30px", marginRight:"10px" }}></FaKey>Buy to unlock
            </button>
          </div>
        </div>
      </div>
    );
};

export default CheckOut;