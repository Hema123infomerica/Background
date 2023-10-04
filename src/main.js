import React from 'react';
import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


function Main() {
  let navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([]);
  const [showAllCheckboxes, setShowAllCheckboxes] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [employeeId, setEmployeeId] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState('');
  const checkboxes = [
    'Emp ID',
    'Branch',
    'Designation',
    'Work Experience',
    'Emp Leaving Date ',
    'Emp DOJ',
    'Emp Reporting Manager',
    'Checkbox 8',
    'Checkbox 9',
    'Checkbox 10',
    'Checkbox 11',
    'Checkbox 12',
    'Checkbox 13',
    'Checkbox 14',
    'Checkbox 15',
    'Checkbox 16',
    'Checkbox 17',
    'Checkbox 18',
    'Checkbox 19',
    'Checkbox 20',
  ];
  const handleEmployeeIdChange = (e) => {
    const value = e.target.value;
    setEmployeeId(value);
    setEmployeeIdError('');
  };

  const validateEmployeeId = () => {
    const regex = /^IN\d{9}$/; 
    if (!regex.test(employeeId)) {
      setEmployeeIdError('Enter A Valid Email Address');
    }
  };
  const newEmployee =()=>{
     navigate('/AddEmp')
  }
  const numCheckboxesToShow = 5;

  function toggleShowCheckboxes() {
    setShowAllCheckboxes(!showAllCheckboxes);
  }
  function toggleCheckbox(index) {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  }

  function handleSelectAll() {
    if (!selectAll) {
      setCheckedItems(new Array(checkboxes.length).fill(true));
    } else {
      setCheckedItems([]);
    }
    setSelectAll(!selectAll);
  }
  return (
    <div className="App">
        <div className="top-right">
          <img
            src="https://media.licdn.com/dms/image/C560BAQFDhV0dHMm9mA/company-logo_200_200/0/1519886366615?e=2147483647&v=beta&t=Rl9lW_OOO_innmCyku5B8okgTYmD2feiUSf8N5qw_Kk" 
            alt="My Logo"
            className="logo-top-right"
          />
        </div>
      <div className="right-side">

        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" 
          alt="My Logo"
          className="logo"/>
      <div>
        <div className="header-container">
          <header className="App-header">
            <h1 className="heading">INFOMERICA HR PORTAL</h1>
          </header>
        </div>
        <div className="accordion" id="accordionExample">
        <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Update Existing Employee Details
       </button>
     </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <button type="button" class="btn btn-dark" onClick={newEmployee}>Add a new employee</button>   
       <button type="button" class="btn btn-dark" onClick={() => navigate('/UpdateEmployee')}>Update Existing Employee</button>
       </div>
     </div>
   </div>
   <div class="accordion-item">
     <h2 class="accordion-header" id="headingTwo">
       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Fetch Employee Details
       </button>
     </h2>
     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
       <div class="accordion-body">
       <input
            type="text"
            placeholder="Emp ID.."
            value={employeeId}
            onChange={handleEmployeeIdChange}
            onBlur={validateEmployeeId} 
          />
          {employeeIdError && <p className="error-message">{employeeIdError}</p>}
        
       </div>
<div className="checkbox-columns">
                <label>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />{' '}
                  Select All
                </label>
                {checkboxes.slice(0, showAllCheckboxes ? checkboxes.length : numCheckboxesToShow).map((checkbox, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      checked={checkedItems[index] || false}
                      onChange={() => toggleCheckbox(index)}
                    />{' '}
                    {checkbox}
                  </label>
                ))}
                {!showAllCheckboxes && checkboxes.length > numCheckboxesToShow && (
  <label className="ellipsis" onClick={toggleShowCheckboxes}>
    ...More
  </label>
)}

{showAllCheckboxes && (
  <label className="ellipsis" onClick={toggleShowCheckboxes}>
    ...Show Less
  </label>
)}

              </div>

              <div class="d-grid gap-2 mt-3">
  <button class="btn btn-primary" type="button">Submit</button>
       </div>
            </div>
    </div>
  </div>
  
        </div>

</div>
      </div>
    
   
  );
}

export default Main;
