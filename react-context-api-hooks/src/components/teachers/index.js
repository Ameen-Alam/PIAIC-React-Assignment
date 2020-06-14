import React from 'react';

// import Provider 
import { TeachersContextProvider } from '../../contexts/ContextProvider'

import TeachersList from './teachers-list'



const Teachers = () => {

  return (
    <TeachersContextProvider>
      <TeachersList />
    </TeachersContextProvider>
  );
}

export default Teachers;