import React from "react";
import "./Addemp.css";

function NewEmployeePage() {
  return (
    <div className="container-fluid">
      <div className="logodiv">
        <img
          src="https://media.licdn.com/dms/image/C560BAQFDhV0dHMm9mA/company-logo_200_200/0/1519886366615?e=2147483647&v=beta&t=Rl9lW_OOO_innmCyku5B8okgTYmD2feiUSf8N5qw_Kk"
          alt="Company Logo"
          className="img-fluid"
        />
      </div>
      <div className="maindiv">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1505856860/display_1500/stock-vector-employer-meeting-job-applicant-at-pre-employment-assessment-employee-evaluation-assessment-form-1505856860.jpg"
          alt="Employee Image"
          id="leftsideimg"
        />
        <div className="form-section">
          <form>
            <div className="input-group">
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Id*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div> 
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
  <select id="year" name="year">
    <option valu="year" class='choose'>Choose year</option>
    <option value="year">0</option>
    <option value="year">1+ year</option>
    <option value="year">2 years</option>
    <option value="year">3 years</option>
  </select>
    </div>
           <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
              <div className="mb-3 mx-2">
                <input class="inp" placeholder="Employee Name*"/>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewEmployeePage;
