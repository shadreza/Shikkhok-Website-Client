import React, { useContext } from 'react';
import { CourseContext } from '../../App';
import CourseForAdmin from '../CourseForAdmin/CourseForAdmin';
import './AdminManagesCourse.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
const AdminManagesCourse = () => {
    const courses = useContext(CourseContext);
    
      const onSubmit = data => {
        let courseInfo = {
            name:data.name,
            message:data.message,
            image:data.image,
            category:data.category,
            class:data.class,
            cost:data.cost,
            instructorName:data.instructorName,
            email:data.email,
            phoneNumber:data.phoneNumber,
          }
          console.log(data);
          let IMAGE="";
          const img = courseInfo.image[0];
          console.log('a',img);
          const imgData = new FormData();
          imgData.set('key','45993c2fa3b2590d51cee87d8ff551a6');
          imgData.append('image',img);
          console.log(img);
          axios.post('https://api.imgbb.com/1/upload',imgData)
          .then(function (response) {
              IMAGE = response.data.data.display_url;
              courseInfo.image=IMAGE;
              console.log(courseInfo);
              const url = "https://fierce-lowlands-85167.herokuapp.com/addCourse";
              axios.post(url,courseInfo)
              .then(res=>{
                  console.log(res);
                  console.log("Successful");
                  alert("Successfully Added");
              })
              .catch(err=>{
                  console.log(err.message);
                  alert("Could Not Be Added");
              })                                                                      
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    const { register, handleSubmit, watch, formState} = useForm();
    
    return (
        <div className="manageCourse">
            <h3>Courses Available</h3>
            <div className="showingCourses">
                {
                    courses[0].map(course=><CourseForAdmin courseDetails={course}></CourseForAdmin>)
                }
            </div>
            <h3>Add Courses</h3>
            <div className="inputForm">
            <form className="addingProduct" onSubmit={handleSubmit(onSubmit)}>
                    <p><strong>Name Of The Course</strong></p>
                    <input id="name" placeholder="input name" className="inputBox" {...register("name" , { required: true })} />
                    <br/>
                    <br/>
                    <p><strong>Class Of The Course</strong></p>
                    <input id="class" className="inputBox" placeholder="input class" {...register("class" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Category Of The Course</strong></p>
                    <input id="category" placeholder="input category"  className="input category" {...register("category" , { required: true })} /> 
                    <br/><br/>
                    <p><strong>Description Of The Course</strong></p>
                    <input id="description" className="inputBox"  placeholder="input description" {...register("message" , { required: true })} />
                    <br/><br/>
                    <p><strong>Price Of The Course</strong></p>
                    <input id="price" className="inputBox" type="number" placeholder="input price" {...register("cost" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Name Of The Instructor</strong></p>
                    <input id="teacherName" className="inputBox"  placeholder="input teacher name" {...register("instructorName" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Phone Number Of The Instructor</strong></p>
                    <input id="teacherPhnNo" className="inputBox"  placeholder="input teacher hone number" {...register("phoneNumber" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Email Of The Instructor</strong></p>
                    <input id="teacherMail" className="inputBox" placeholder="input teacher mail number" {...register("email" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Upload Your Course Image</strong></p>
                    <input id="inputImage" className="inputBox" type="file" placeholder="upload image" {...register("image" , { required: true })} />
                    <br/><br/>
                    <input type="submit" />
                </form>      
            </div>
        </div>
    );
};

export default AdminManagesCourse;