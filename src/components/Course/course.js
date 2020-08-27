import React from 'react';
import './Course.css';

const Course = (props) => {
    const coursedata = props.courseData;
    const handleAddCourse = props.handleAddCourse;
    // console.log(courseData);
    const {image,title,price,founder} = coursedata;
    return (
        <div className="course-main">
            <div className="course">
                <div className="course-img">
                    <img src={image}/>
                </div>
                <div className="course-info">
                    <h4>{title}</h4>
                    <small>by {founder}</small>
                    <p>Course fee: <b> $ {price}</b></p>
                    <button className="btn btn-primary" onClick={()=> handleAddCourse(props.courseData)}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;