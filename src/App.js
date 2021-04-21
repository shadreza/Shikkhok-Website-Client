import { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./components/FirebaseConfig/firebase.config"
import HeaderNavBar from "./components/HeaderNavBar/HeaderNavBar"
import StickyFooter from "./components/StickyFooter/StickyFooter";
firebase.initializeApp(firebaseConfig);

export const ShouldBtnBeThereContext = createContext([]);
export const UserContext = createContext([]);
export const TeacherContext = createContext([]);
export const AdminContext = createContext([]);
export const UserFeedbackContext = createContext([]);
export const CourseContext = createContext([]);
export const ReviewContext = createContext([]);
export const ServiceContext = createContext([]);
export const UserOrderListContext = createContext([]);
export const SelectedCourseContext = createContext([]);
export const SelectedServiceContext = createContext([]);
export const CurrentUserContext = createContext([]);
export const SelectedItem = createContext([]);

function App() {

  
  const defaultUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }
  const defaultAdmin = {
    email:""
  }
  const defaultTeacher = {
    name:"",
    image:"",
    email:"",
    phoneNumber:""
  }
  const defaultUserFeedback = {
    name:"",
    email:"",
    message:""
  }
  const defaultCourse = {
    name:"",
    image:"",
    category:"",
    cost:0.0,
    message:"",
    class:"",
    instructorName:""
  }
  const defaultReview = {
    name:"",
    email:"",
    message:""
  }
  const defaultService = {
    name:"",
    image:"",
    category:"",
    cost:0.0,
    message:""
  }
  const defaultOrderList = {
    name:"",
    image:"",
    cost:0.0,
    message:"",
    orderStatus:0,
    buyerName:""
  }
  const defaultCurrentUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }
  let prd ={
    name : "",
    cost : 0,
    image : "",
    message: "",
    isSetOrNot : false,
    email:"",
    phoneNumber:"",
    orderStatus:0,
    buyerName:"",
    class:"",
    instructorName:"",
    category:"",
    type:0
    }
  const [shouldBtnBeThereOrNot , setShouldBtnBeThereOrNot] = useState(true);
  // const [selectedService , setSelectedService] = useState(defaultService);
  // const [selectedCourse , setSelectedCourse] = useState(defaultCourse);
  const [user , setUser] = useState(defaultUser);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/users')
    .then(res=>res.json())
    .then(data => {
      setUser(data);
    })
  }, [user])
  const [admin , setAdmin] = useState(defaultAdmin);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/admins')
    .then(res=>res.json())
    .then(data => {
      setAdmin(data);
    })
  }, [admin])
  const [teacher , setTeacher] = useState(defaultTeacher);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/teachers')
    .then(res=>res.json())
    .then(data => {
      setTeacher(data);
    })
  }, [teacher])
  const [userFeedback , setUserFeedback] = useState(defaultUserFeedback);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/feedbacks')
    .then(res=>res.json())
    .then(data => {
      setUserFeedback(data);
    })
  }, [userFeedback])
  const [course , setCourse] = useState(defaultCourse);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/courses')
    .then(res=>res.json())
    .then(data => {
      setCourse(data);
    })
  }, [course])
  const [review , setReview] = useState(defaultReview);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data => {
      setReview(data);
    })
  }, [review])
  const [service , setService] = useState(defaultService);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/services')
    .then(res=>res.json())
    .then(data => {
      setService(data);
    })
  }, [service])
  const [userOrderList , setUserOrderList] = useState(defaultOrderList);
  useEffect(() => {
    fetch('https://fierce-cove-21299.herokuapp.com/orders-list')
    .then(res=>res.json())
    .then(data => {
      setUserOrderList(data);
    })
  }, [userOrderList])
  
  
  const [currentUser , setCurrentUser] = useState(defaultUser);
  const [itemSelected , setItemSelected] = useState(prd);
  return (
    <div className="app">
    <ShouldBtnBeThereContext.Provider value={[shouldBtnBeThereOrNot , setShouldBtnBeThereOrNot]}>
    <SelectedItem.Provider value={[itemSelected,setItemSelected]}>
    <CurrentUserContext.Provider value={[currentUser,setCurrentUser]}>
    <UserContext.Provider value={[user , setUser]}>
    <TeacherContext.Provider value={[teacher , setTeacher]}>
    <AdminContext.Provider value={[admin , setAdmin]}>
    <UserFeedbackContext.Provider value={[userFeedback , setUserFeedback]}>
    <CourseContext.Provider value={[course , setCourse]}>
    <ReviewContext.Provider value={[review , setReview]}>
    <ServiceContext.Provider value={[service , setService]}>
    <UserOrderListContext.Provider value={[userOrderList , setUserOrderList]}>
      { 
        course.length>0 && service.length>0 && review.length>0 && admin.length>0 && 
          <div className="App">
            <HeaderNavBar></HeaderNavBar>
            <StickyFooter></StickyFooter>
          </div>
      }
    </UserOrderListContext.Provider>
    </ServiceContext.Provider>
    </ReviewContext.Provider>
    </CourseContext.Provider>
    </UserFeedbackContext.Provider>
    </AdminContext.Provider>
    </TeacherContext.Provider>
    </UserContext.Provider>
    </CurrentUserContext.Provider>
    </SelectedItem.Provider>
    </ShouldBtnBeThereContext.Provider>
    </div>
  );
}

export default App;
