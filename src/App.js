import React, { useState } from 'react';
import './App.css';
import courses from './fakedata/courses'
import Header from './components/Header/Header';
import Course from './components/Course/course';
import Cart from './components/Cart/Cart';


function App() {
  const [course, setCourse] = useState([])

  const handleAddCourse = (courseData) => {
   const newCourse = [...course, courseData]
   setCourse(newCourse)
  }
  console.log("clicked", course)
  return (
    <div className="App">
      <Header></Header>
      <div>
        <div className="main-content">
          {
            courses.map(data => <Course handleAddCourse={handleAddCourse} courseData={data}></Course>)
          }
        </div>
          <Cart enroll={course}></Cart>
      </div>
    </div>
  );
}

export default App;
