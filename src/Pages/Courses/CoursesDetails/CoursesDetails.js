import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaChevronRight, FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Pdf from "react-to-pdf";

import './CourseDetails.css';
const CoursesDetails = () => {
   
    const course = useLoaderData();
    const {id,course_name,image_url,description,prerequisite,duration,ratings,students} =course;
    const ref = React.createRef();
    const navigate = useNavigate();
    const handPremium = ()=>{
      navigate(`/premium-access/${id}`);
    }
    return (
      <Container>
        <Card className="mb-5" style={{ width: "60%", margin: "50px auto" }}>
          <div ref={ref}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title className="fs-3 fw-bolder mb-4 text-center">
                {course_name}
              </Card.Title>
              <Card.Text className="border border-dark p-3">
                {description}
              </Card.Text>
              <div>
                <h6 className="fw-bolder">
                  You must know before enrolling this coures:
                </h6>
                <h6 className="fw-bolder text-danger">{prerequisite}</h6>
              </div>
              <div className="p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    Duration : <span className="ms-1"> {duration}</span>
                  </p>
                  <p>
                    Students: <span className="ms-1">{students}</span>
                  </p>
                  <p>
                    Ratings:
                    <span className="ms-1">
                      <FaStar className="text-warning ms-2"></FaStar>
                      {ratings}
                    </span>
                  </p>
                </div>
              </div>
            </Card.Body>
          </div>
          <div className="d-flex justify-content-between">
              <button onClick={handPremium} className=" p-2 rounded-2 ms-2 buy-button my-3">
                Get Premium Service <FaChevronRight></FaChevronRight>
              </button>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => (
                <button
                  className="mb-2 px-4 bg-danger text-white fw-bold rounded"
                  onClick={toPdf}
                >
                  <FaDownload className="h-50"></FaDownload> PDF
                </button>
              )}
            </Pdf>
          </div>
        </Card>
      </Container>
    );
};

export default CoursesDetails;