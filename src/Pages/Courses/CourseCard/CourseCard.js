import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {id,course_name,description,image_url} = course;
    return (
      <Col lg={"6"} className="p-2">
        <Card className="rounded border  border-dark">
          <div>
            <Card.Img variant="top" src={image_url} />
          </div>
          <Card.Body>
            <Card.Title className="fw-bolder">{course_name}</Card.Title>
            <Card.Text className="fw-semibold d-inline ">
              {description.length > 140
                ? description.slice(0, 140) + "..."
                : { description }}
            </Card.Text>
            <Link className="ms-2" to={`/courses/${id}`}>
              Explore More...
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CourseCard;