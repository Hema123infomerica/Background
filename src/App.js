import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  Main  from './main';
import  NewEmployeePage  from './AddEmp';
import UpdateEmployee from './update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Main/>} />
        <Route path="AddEmp" element={<NewEmployeePage/>} />
        <Route path="UpdateEmployee" element={<UpdateEmployee/>} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;