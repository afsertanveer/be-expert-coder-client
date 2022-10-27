import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const course = useLoaderData();
    const {id,course_name,image_url,description,prerequisite} =course;
    return (
      <Card style={{ width: "100%", marginTop: "50px" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" className='buy-button'>
            Get Premium Service <FaChevronRight></FaChevronRight>
          </Button>
        </Card.Body>
      </Card>
    );
};

export default CoursesDetails;