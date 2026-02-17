import React, { useState } from "react";

export default function App() {

  const [activeTab, setActiveTab] = useState("student");

  // ===== STATES =====
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [applications, setApplications] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [payments, setPayments] = useState([]);
  const [officers, setOfficers] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [records, setRecords] = useState([]);

  // ===== FORM STATES =====
  const [studentForm, setStudentForm] = useState({
    name: "",
    dob: "",
    loginId: ""
  });

  const [courseForm, setCourseForm] = useState({
    name: "",
    dept: "",
    duration: ""
  });

  const [applicationForm, setApplicationForm] = useState({
    studentId: "",
    courseId: "",
    address: "",
    percentage: ""
  });

  const [documentForm, setDocumentForm] = useState({
    appId: "",
    type: "",
    upload: ""
  });

  const [paymentForm, setPaymentForm] = useState({
    appId: "",
    fee: "",
    transactionId: "",
    payDate: "",
    status: ""
  });

  const [officerForm, setOfficerForm] = useState({
    name: "",
    loginId: ""
  });

  const [statusForm, setStatusForm] = useState({
    studentId: "",
    officerId: "",
    review: "",
    status: ""
  });

  const [recordForm, setRecordForm] = useState({
    appId: "",
    officerId: ""
  });

  // ===== ADD FUNCTIONS =====
  const addStudent = () => {
    setStudents([...students, { id: Date.now(), ...studentForm }]);
  };

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), ...courseForm }]);
  };

  const addApplication = () => {
    setApplications([...applications, { id: Date.now(), ...applicationForm }]);
  };

  const addDocument = () => {
    setDocuments([...documents, { id: Date.now(), ...documentForm }]);
  };

  const addPayment = () => {
    setPayments([...payments, { id: Date.now(), ...paymentForm }]);
  };

  const addOfficer = () => {
    setOfficers([...officers, { id: Date.now(), ...officerForm }]);
  };

  const addStatus = () => {
    setStatuses([...statuses, { id: Date.now(), ...statusForm }]);
  };

  const addRecord = () => {
    setRecords([...records, { id: Date.now(), ...recordForm }]);
  };

  // ===== NAV =====
  const TabButton = ({ id, label }) => (
    <button
      className={`btn me-2 ${activeTab === id ? "btn-primary" : "btn-outline-primary"}`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">College Admission System</h2>

      {/* NAV */}
      <div className="mb-4 text-center">
        <TabButton id="student" label="Student" />
        <TabButton id="course" label="Course" />
        <TabButton id="application" label="Application" />
        <TabButton id="document" label="Document" />
        <TabButton id="payment" label="Payment" />
        <TabButton id="officer" label="Officer" />
        <TabButton id="status" label="App Status" />
        <TabButton id="record" label="Record" />
      </div>

      {/* STUDENT */}
      {activeTab === "student" && (
        <div className="card p-3">
          <h4>Add Student</h4>
          <input className="form-control mb-2" placeholder="Name"
            onChange={e => setStudentForm({ ...studentForm, name: e.target.value })} />
          <input type="date" className="form-control mb-2"
            onChange={e => setStudentForm({ ...studentForm, dob: e.target.value })} />
          <input className="form-control mb-2" placeholder="Login ID"
            onChange={e => setStudentForm({ ...studentForm, loginId: e.target.value })} />
          <button className="btn btn-success" onClick={addStudent}>Add</button>

          <table className="table mt-3">
            <thead><tr><th>Name</th><th>DOB</th><th>Login</th></tr></thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.dob}</td>
                  <td>{s.loginId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* COURSE */}
      {activeTab === "course" && (
        <div className="card p-3">
          <h4>Add Course</h4>
          <input className="form-control mb-2" placeholder="Course Name"
            onChange={e => setCourseForm({ ...courseForm, name: e.target.value })} />
          <input className="form-control mb-2" placeholder="Dept"
            onChange={e => setCourseForm({ ...courseForm, dept: e.target.value })} />
          <input className="form-control mb-2" placeholder="Duration"
            onChange={e => setCourseForm({ ...courseForm, duration: e.target.value })} />
          <button className="btn btn-success" onClick={addCourse}>Add</button>

          <table className="table mt-3">
            <thead><tr><th>Name</th><th>Dept</th><th>Duration</th></tr></thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.dept}</td>
                  <td>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* APPLICATION */}
      {activeTab === "application" && (
        <div className="card p-3">
          <h4>Add Application</h4>
          <input className="form-control mb-2" placeholder="Student ID"
            onChange={e => setApplicationForm({ ...applicationForm, studentId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Course ID"
            onChange={e => setApplicationForm({ ...applicationForm, courseId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Address"
            onChange={e => setApplicationForm({ ...applicationForm, address: e.target.value })} />
          <input className="form-control mb-2" placeholder="Percentage"
            onChange={e => setApplicationForm({ ...applicationForm, percentage: e.target.value })} />
          <button className="btn btn-success" onClick={addApplication}>Add</button>
        </div>
      )}

      {/* DOCUMENT */}
      {activeTab === "document" && (
        <div className="card p-3">
          <h4>Add Document</h4>
          <input className="form-control mb-2" placeholder="Application ID"
            onChange={e => setDocumentForm({ ...documentForm, appId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Type"
            onChange={e => setDocumentForm({ ...documentForm, type: e.target.value })} />
          <input className="form-control mb-2" placeholder="Upload Path"
            onChange={e => setDocumentForm({ ...documentForm, upload: e.target.value })} />
          <button className="btn btn-success" onClick={addDocument}>Add</button>
        </div>
      )}

      {/* PAYMENT */}
      {activeTab === "payment" && (
        <div className="card p-3">
          <h4>Add Payment</h4>
          <input className="form-control mb-2" placeholder="Application ID"
            onChange={e => setPaymentForm({ ...paymentForm, appId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Fee"
            onChange={e => setPaymentForm({ ...paymentForm, fee: e.target.value })} />
          <input className="form-control mb-2" placeholder="Transaction ID"
            onChange={e => setPaymentForm({ ...paymentForm, transactionId: e.target.value })} />
          <input type="date" className="form-control mb-2"
            onChange={e => setPaymentForm({ ...paymentForm, payDate: e.target.value })} />
          <input className="form-control mb-2" placeholder="Status"
            onChange={e => setPaymentForm({ ...paymentForm, status: e.target.value })} />
          <button className="btn btn-success" onClick={addPayment}>Add</button>
        </div>
      )}

      {/* OFFICER */}
      {activeTab === "officer" && (
        <div className="card p-3">
          <h4>Add Officer</h4>
          <input className="form-control mb-2" placeholder="Name"
            onChange={e => setOfficerForm({ ...officerForm, name: e.target.value })} />
          <input className="form-control mb-2" placeholder="Login ID"
            onChange={e => setOfficerForm({ ...officerForm, loginId: e.target.value })} />
          <button className="btn btn-success" onClick={addOfficer}>Add</button>
        </div>
      )}

      {/* STATUS */}
      {activeTab === "status" && (
        <div className="card p-3">
          <h4>Add Status</h4>
          <input className="form-control mb-2" placeholder="Student ID"
            onChange={e => setStatusForm({ ...statusForm, studentId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Officer ID"
            onChange={e => setStatusForm({ ...statusForm, officerId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Review"
            onChange={e => setStatusForm({ ...statusForm, review: e.target.value })} />
          <input className="form-control mb-2" placeholder="Status"
            onChange={e => setStatusForm({ ...statusForm, status: e.target.value })} />
          <button className="btn btn-success" onClick={addStatus}>Add</button>
        </div>
      )}

      {/* RECORD */}
      {activeTab === "record" && (
        <div className="card p-3">
          <h4>Add Record</h4>
          <input className="form-control mb-2" placeholder="Application ID"
            onChange={e => setRecordForm({ ...recordForm, appId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Officer ID"
            onChange={e => setRecordForm({ ...recordForm, officerId: e.target.value })} />
          <button className="btn btn-success" onClick={addRecord}>Add</button>
        </div>
      )}

    </div>
  );
}