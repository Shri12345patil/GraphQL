import React from 'react'
import {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Edit from './Edit';
import { useLocation}  from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    Students{
      id
      username
      password
    }
  }
`;

function StudentList(props) {
    const[students, setStudents] = useState([])
    const[editedStudent, setEditedStudent] = useState(null)

    const updatedData = (student) =>{
        const new_student = students.map(my_student =>{
          if(my_student.id === student.id){
            return student
          } else{
            return my_student
          }
        }) 
        setStudents(new_student)
      }
      

    // modal aprt 
  const [modalIsOpen1,setModalIsOpen1] = useState(false);

  const setModalIsOpenToTrue1 =()=>{setModalIsOpen1(true) }
  const setModalIsOpenToFalse1 =()=>{setModalIsOpen1(false)}
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'LightSlateGray'      
    }
};

const editStudent = (student) => {
    setEditedStudent(student)
  }

  const location = useLocation();
useEffect(() => {
  console.log(location.pathname); // result: '/secondpage'
  // console.log(location.search); // result: '?query=abc'
  console.log(location.state);
}, [location]);

// graphql code
const p_id= location.state.replace(/ /g,'');
const { data, loading, error } = useQuery(FILMS_QUERY);


  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  function is_avil(Sdata){
    return Sdata.id === p_id.replace(/ /g,'');
   }

    return (
        <div>
              {data.Students.map(Student => {
               
                if(p_id === Student.id){
                   
                  return(
                    <div key = {Student.id}>
                    <h2 className="h2">{Student.username}</h2>
                    <h2 className="h2" >{Student.password}</h2>
                    <div className="row">
                    <div className="col-md-2">
                        <button className="btn btn-primary" 
                        onClick= {() => {editStudent(Student); setModalIsOpenToTrue1();}}>Edit</button>
                        <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}  ariaHideApp={false}>
                                <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                                <Edit student = {editedStudent} updatedData = {updatedData} />
                        </Modal>
                    </div>  
                </div>
                <hr/>

                  </div>)
                }
                else{
                   console.log("Invalid Username and password");
                }
              })}
              {/* {props.students.map(student =>{
                  let my_student=p_id;
                  // console.log(my_student);
                  if(my_student == student.id){
                    return(
                        <div key = {student.id}>
                            <h2 className="h2">{student.username}</h2>
                            <h2 className="h2" >{student.password}</h2>
        
                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn btn-primary" 
                                    onClick= {() => {editStudent(student); setModalIsOpenToTrue1();}}>Edit</button>
                                    <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}  ariaHideApp={false}>
                                            <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                                            <Edit student = {editedStudent} updatedData = {updatedData} />
                                    </Modal>
                                </div>  
                            </div>
                            <hr/>
                        </div>
                        )
                  } 
                
            })} */}
        </div>  
    )
}

export default StudentList