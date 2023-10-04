import React,{useState} from "react";
import './update.css'

function UpdateEmployee() {
  const [placeholder, setPlaceholder] = useState("Search Employee ID");
  const [employeeId, setEmployeeId] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const [error, setError] = useState("");

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
    setError("");
  };

  const handleSearch = () => {
    const employeeIdRegex = /^IN\d{9}$/;

    if (employeeIdRegex.test(employeeId)) {
      setError("");
      setDisplayForm(true);
    } else {
      setError("Employee ID must start with 'IN' followed by 9 numbers.");
      setDisplayForm(false);
    }
  };
  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Search Employee ID");
  };
  return (
    <div className="container-fluid">
      <div className="logodiv">
        <img
          src="https://media.licdn.com/dms/image/C560BAQFDhV0dHMm9mA/company-logo_200_200/0/1519886366615?e=2147483647&v=beta&t=Rl9lW_OOO_innmCyku5B8okgTYmD2feiUSf8N5qw_Kk"
          alt="Company Logo"
          className="img-fluid"
        />
      </div>
      <div className="text-center">
        <h3>UPDATE EXISTING EMPLOYEE</h3>
        </div>
       <div className="row">
        <div className="col">
          <input
            type="text"
            className={`form-control small-input ${
              error ? "error-border" : ""
            }`}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={employeeId}
            onChange={handleEmployeeIdChange}
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {displayForm && (
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
                Update
              </button>
            </div>
          </form>
        </div>
      )}
</div>
  );
}

export default UpdateEmployee;

