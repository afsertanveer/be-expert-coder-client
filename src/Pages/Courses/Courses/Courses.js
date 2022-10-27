import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import LeftNavBar from '../../../Shared/LeftNavBar/LeftNavBar';
import CourseCard from '../CourseCard/CourseCard';
const Courses = () => {
    const {user} = useContext(AuthContext)
    const courses = useLoaderData();
    return (
      <Row className="g-3">
        <Col lg={"3"}>
          <LeftNavBar></LeftNavBar>
        </Col>
        <Col lg={"9"}>
          <h2 className="fs-2 text-center fw-bolder">
            We are offering the courses given below
          </h2>
          <Row>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course}></CourseCard>
            ))}
          </Row>
        </Col>
      </Row>
    );
};

export default Courses;
