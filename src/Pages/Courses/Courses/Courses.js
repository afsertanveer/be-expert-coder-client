import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import CourseCard from '../CourseCard/CourseCard';
const Courses = () => {
    const {user} = useContext(AuthContext)
    const courses = useLoaderData();
    return (
        <Row className='g-3'>
            <h2 className='fs-2 text-center fw-bolder'>We are offering the courses given below</h2>
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </Row>
    );
};

export default Courses;
