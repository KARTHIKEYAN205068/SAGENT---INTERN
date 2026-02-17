import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // ------------------- STATES -------------------

  const [doctors] = useState([
    { id: 1, name: "Dr. Sharma", contact: "9876543210", email: "drsharma@gmail.com" }
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: "Ravi Kumar", age: 35, contact: "9998887776", address: "Chennai" }
  ]);

  const [appointments, setAppointments] = useState([]);
  const [readings, setReadings] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [healthRecords, setHealthRecords] = useState([]);
  const [reports, setReports] = useState([]);

  // ------------------- FUNCTIONS -------------------

  const addAppointment = (patientId, doctorId) => {
    const newApp = {
      id: appointments.length + 1,
      patientId,
      doctorId,
      status: "Scheduled",
      date: new Date().toLocaleString()
    };
    setAppointments([...appointments, newApp]);
  };

  const addReading = (patientId) => {
    const newReading = {
      id: readings.length + 1,
      patientId,
      temperature: (36 + Math.random() * 2).toFixed(1),
      bp: `${110 + Math.floor(Math.random() * 20)}/${70 + Math.floor(Math.random() * 10)}`,
      date: new Date().toLocaleString()
    };
    setReadings([...readings, newReading]);
  };

  const addHealthRecord = (patientId) => {
    const newRecord = {
      id: healthRecords.length + 1,
      patientId,
      history: "Normal",
      recordTime: new Date().toLocaleString(),
      oxygenLevel: 95 + Math.floor(Math.random() * 5)
    };
    setHealthRecords([...healthRecords, newRecord]);
  };

  const addConsultation = (patientId, doctorId) => {
    const newConsult = {
      id: consultations.length + 1,
      patientId,
      doctorId,
      details: "General Checkup",
      status: "Completed"
    };
    setConsultations([...consultations, newConsult]);
  };

  const sendMessage = (consultId) => {
    const newMessage = {
      id: messages.length + 1,
      consultId,
      comment: "Take medicines regularly",
      type: "Doctor",
      time: new Date().toLocaleString()
    };
    setMessages([...messages, newMessage]);
  };

  const generateReport = (patientId) => {
    const newReport = {
      id: reports.length + 1,
      patientId,
      reportNo: "REP-" + Math.floor(Math.random() * 10000),
      description: "Patient health stable"
    };
    setReports([...reports, newReport]);
  };

  // ------------------- UI -------------------

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🏥 Patient Monitoring System</h2>

      <ul className="nav nav-pills justify-content-center mb-4">
        {["dashboard", "appointments", "records", "consultations"].map((tab) => (
          <li key={tab} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* DASHBOARD */}
      {activeTab === "dashboard" && (
        <div className="row">
          {patients.map((patient) => (
            <div key={patient.id} className="col-md-6 mb-3">
              <div className="card shadow">
                <div className="card-body">
                  <h5>{patient.name}</h5>
                  <p>Age: {patient.age}</p>
                  <p>Contact: {patient.contact}</p>

                  <button
                    className="btn btn-primary me-2"
                    onClick={() => addReading(patient.id)}
                  >
                    Add Reading
                  </button>

                  <button
                    className="btn btn-success me-2"
                    onClick={() => addHealthRecord(patient.id)}
                  >
                    Add Health Record
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => generateReport(patient.id)}
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* APPOINTMENTS */}
      {activeTab === "appointments" && (
        <div>
          <h4>Appointments</h4>
          <button
            className="btn btn-primary mb-3"
            onClick={() => addAppointment(1, 1)}
          >
            Schedule Appointment
          </button>

          {appointments.map((app) => (
            <div key={app.id} className="card mb-2">
              <div className="card-body">
                Patient: {patients.find(p => p.id === app.patientId)?.name}
                <br />
                Doctor: {doctors.find(d => d.id === app.doctorId)?.name}
                <br />
                Status: {app.status}
                <br />
                Date: {app.date}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* RECORDS */}
      {activeTab === "records" && (
        <div>
          <h4>Patient Readings</h4>
          {readings.map((r) => (
            <div key={r.id} className="card mb-2">
              <div className="card-body">
                Temp: {r.temperature}°C | BP: {r.bp}
                <br />
                Date: {r.date}
              </div>
            </div>
          ))}

          <h4 className="mt-4">Health Records</h4>
          {healthRecords.map((hr) => (
            <div key={hr.id} className="card mb-2">
              <div className="card-body">
                Oxygen: {hr.oxygenLevel}%
                <br />
                History: {hr.history}
                <br />
                Time: {hr.recordTime}
              </div>
            </div>
          ))}

          <h4 className="mt-4">Reports</h4>
          {reports.map((rep) => (
            <div key={rep.id} className="card mb-2">
              <div className="card-body">
                Report No: {rep.reportNo}
                <br />
                Description: {rep.description}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CONSULTATIONS */}
      {activeTab === "consultations" && (
        <div>
          <button
            className="btn btn-info mb-3"
            onClick={() => addConsultation(1, 1)}
          >
            Add Consultation
          </button>

          {consultations.map((c) => (
            <div key={c.id} className="card mb-2">
              <div className="card-body">
                Consultation: {c.details}
                <br />
                Status: {c.status}
                <br />
                <button
                  className="btn btn-secondary mt-2"
                  onClick={() => sendMessage(c.id)}
                >
                  Send Message
                </button>
              </div>
            </div>
          ))}

          <h5 className="mt-3">Messages</h5>
          {messages.map((m) => (
            <div key={m.id} className="alert alert-light">
              {m.comment} ({m.type}) - {m.time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
