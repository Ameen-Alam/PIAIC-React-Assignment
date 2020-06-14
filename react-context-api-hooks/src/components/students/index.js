import React from 'react';

// import Provider 
import { StudentsContextProvider } from '../../contexts/ContextProvider'


import StudentsList from './students-list'



const Students = () => {

  return (
    <StudentsContextProvider>
      <StudentsList />
    </StudentsContextProvider>
  );
}

export default Students;