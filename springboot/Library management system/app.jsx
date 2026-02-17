import React, { useState } from "react";

function App() {

  // ===== STATES =====
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [borrows, setBorrows] = useState([]);
  const [librarians, setLibrarians] = useState([]);
  const [fines, setFines] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [genres, setGenres] = useState([]);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => setForm({});

  // ===== ADD FUNCTIONS =====
  const addMember = () => { setMembers([...members, form]); clearForm(); };
  const addBook = () => { setBooks([...books, form]); clearForm(); };
  const addInventory = () => { setInventory([...inventory, form]); clearForm(); };
  const addBorrow = () => { setBorrows([...borrows, form]); clearForm(); };
  const addLibrarian = () => { setLibrarians([...librarians, form]); clearForm(); };
  const addFine = () => { setFines([...fines, form]); clearForm(); };
  const addNotification = () => { setNotifications([...notifications, form]); clearForm(); };
  const addGenre = () => { setGenres([...genres, form]); clearForm(); };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Library Management System</h2>

      {/* MEMBER */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">Member</div>
        <div className="card-body">
          <input className="form-control mb-2" name="memberId" placeholder="Member ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange}/>
          <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange}/>
          <input className="form-control mb-2" name="password" placeholder="Password" onChange={handleChange}/>
          <input className="form-control mb-2" name="address" placeholder="Address" onChange={handleChange}/>
          <input className="form-control mb-2" name="phone" placeholder="Phone" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addMember}>Add Member</button>
        </div>
      </div>

      {/* BOOK */}
      <div className="card mb-4">
        <div className="card-header bg-info text-white">Book</div>
        <div className="card-body">
          <input className="form-control mb-2" name="bookId" placeholder="Book ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="isbn" placeholder="ISBN" onChange={handleChange}/>
          <input className="form-control mb-2" name="title" placeholder="Title" onChange={handleChange}/>
          <input className="form-control mb-2" name="subject" placeholder="Subject" onChange={handleChange}/>
          <input className="form-control mb-2" name="author" placeholder="Author" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addBook}>Add Book</button>
        </div>
      </div>

      {/* INVENTORY */}
      <div className="card mb-4">
        <div className="card-header bg-warning">Inventory</div>
        <div className="card-body">
          <input className="form-control mb-2" name="inventoryId" placeholder="Inventory ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="bookId" placeholder="Book ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="availableCopies" placeholder="Available Copies" onChange={handleChange}/>
          <input className="form-control mb-2" name="totalCopies" placeholder="Total Copies" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addInventory}>Add Inventory</button>
        </div>
      </div>

      {/* BORROW */}
      <div className="card mb-4">
        <div className="card-header bg-secondary text-white">Borrow</div>
        <div className="card-body">
          <input className="form-control mb-2" name="borrowId" placeholder="Borrow ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="bookId" placeholder="Book ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="memberId" placeholder="Member ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="issueDate" placeholder="Issue Date" onChange={handleChange}/>
          <input className="form-control mb-2" name="dueDate" placeholder="Due Date" onChange={handleChange}/>
          <input className="form-control mb-2" name="returnDate" placeholder="Return Date" onChange={handleChange}/>
          <input className="form-control mb-2" name="status" placeholder="Status" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addBorrow}>Add Borrow</button>
        </div>
      </div>

      {/* LIBRARIAN */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-white">Librarian</div>
        <div className="card-body">
          <input className="form-control mb-2" name="libId" placeholder="Librarian ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="libName" placeholder="Name" onChange={handleChange}/>
          <input className="form-control mb-2" name="libPassword" placeholder="Password" onChange={handleChange}/>
          <input className="form-control mb-2" name="libPhone" placeholder="Phone" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addLibrarian}>Add Librarian</button>
        </div>
      </div>

      {/* FINE */}
      <div className="card mb-4">
        <div className="card-header bg-danger text-white">Fine</div>
        <div className="card-body">
          <input className="form-control mb-2" name="fineId" placeholder="Fine ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="bookId" placeholder="Book ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="amount" placeholder="Amount" onChange={handleChange}/>
          <input className="form-control mb-2" name="status" placeholder="Status" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addFine}>Add Fine</button>
        </div>
      </div>

      {/* GENRE */}
      <div className="card mb-4">
        <div className="card-header bg-success text-white">Book Genre</div>
        <div className="card-body">
          <input className="form-control mb-2" name="bookId" placeholder="Book ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="genreName" placeholder="Genre Name" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addGenre}>Add Genre</button>
        </div>
      </div>

      {/* NOTIFICATION */}
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">Notification</div>
        <div className="card-body">
          <input className="form-control mb-2" name="notificationId" placeholder="Notification ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="memberId" placeholder="Member ID" onChange={handleChange}/>
          <input className="form-control mb-2" name="message" placeholder="Message Content" onChange={handleChange}/>
          <input className="form-control mb-2" name="sentDate" placeholder="Sent Date" onChange={handleChange}/>
          <input className="form-control mb-2" name="notificationType" placeholder="Notification Type" onChange={handleChange}/>
          <button className="btn btn-success" onClick={addNotification}>Add Notification</button>
        </div>
      </div>

      {/* DISPLAY SECTION */}
      <h4 className="mt-5">Borrow Records</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Borrow ID</th>
            <th>Book ID</th>
            <th>Member ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {borrows.map((b, index) => (
            <tr key={index}>
              <td>{b.borrowId}</td>
              <td>{b.bookId}</td>
              <td>{b.memberId}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;