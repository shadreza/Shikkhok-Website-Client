import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './CourseForAdmin.css';
import axios from 'axios';
import { CourseContext } from '../../App';

const CourseForAdmin = (passedParams) => {
    let courseInfo = {
        name:"",
        message:"",
        image:"",
        category:"",
        class:"",
        cost:0.0,
        instructorName:"",
        phoneNumber:"",
        email:""
      }
    const contextCourse = useContext(CourseContext);
    const currentCourse = passedParams.courseDetails;
        courseInfo.name = currentCourse.name;
        courseInfo.message = currentCourse.message;
        courseInfo.image = currentCourse.image;
        courseInfo.category = currentCourse.category;
        courseInfo.class = currentCourse.class;
        courseInfo.cost = currentCourse.cost;
        courseInfo.feePerDuration = currentCourse.feePerDuration;
        courseInfo.instructorName = currentCourse.instructorName;
        courseInfo.phoneNumber = currentCourse.phoneNumber;
        courseInfo.email = currentCourse.email;
        const courseId = currentCourse._id;

        const deleteCourseFunction = (id) => {
            const url = `https://fierce-cove-21299.herokuapp.com/deleteCourse/${id}`;
            axios.delete(url , { params: { id }})
            .then(res => {
                alert(`deleted successfully`)
                console.log(res);
                
            })
            .catch(err=>{
                console.log(err);
            })
        }
    
    return (
        <div className="courseAdmin">
            <img src={courseInfo.image} alt=""/>
            <p><strong>{courseInfo.name}</strong></p>
            <p><strong>{courseInfo.category}</strong></p>
            <p><strong>{courseInfo.cost}</strong></p>
            <p><strong>{courseInfo.instructorName}</strong></p>
            <Button variant="danger" onClick={()=>deleteCourseFunction(courseId)}>Remove</Button>
        </div>
    );
};

export default CourseForAdmin;