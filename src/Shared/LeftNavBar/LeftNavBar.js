import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
    
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
          const fetchData = async () => {
            try {
              const url = "https://be-expert-coder-server.vercel.app/courses";
              const response = await fetch(url);
              const data = await response.json();
              setCourses(data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
    },[])
    return (
      <div style={{ marginTop:"50px" }}>
        <h2 className='text-center fw-bold'>All Courses</h2>
        {courses.map((course) => (
          <Link
            className="d-block fw-bold text-success"
            key={course.id}
            to={`/courses/${course.id}`}
          >
            {course.course_name}
          </Link>
          
        ))}
      </div>
    );
};

export default LeftNavBar;