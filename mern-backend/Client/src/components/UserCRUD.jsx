import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import API from "../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from "react-bootstrap";

export default function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });
  const [editId, setEditId] = useState(null);

  // GET USERS
  const fetchUsers = async () => {
    const res = await API.get("/");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await API.put(`/${editId}`, form);
      setEditId(null);
    } else {
      await API.post("/", form);
    }

    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  // DELETE
  const handleDelete = async (id) => {
    await API.delete(`/${id}`);
    fetchUsers();
  };

  // EDIT
  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      age: user.age
    });
    setEditId(user._id);
  };

  return (
  <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
    <div className="max-w-6xl mx-auto">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        MERN User CRUD
      </h1>

      {/* FORM */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg mb-6 max-w-4xl mx-auto">
        
        <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-700 text-center">
          {editId ? "Update User" : "Add User"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2
             focus:ring-blue-400 w-full" style={{ margin: "0 20px 0 0" }}
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2
             focus:ring-blue-400 w-full"  style={{ margin: "0 20px 0 0", width: "18%" }}
          />

          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2
             focus:ring-blue-400 w-full"  style={{ margin: "0 20px 0 0" }}
          />

          <div className="sm:col-span-2 md:col-span-3 flex justify-center mt-5">
            <Button type="submit" size="lg" variant="primary">
              {editId ? "Update User" : "Add User"}
            </Button>
          </div>
        </form>
      </div>

      {/* USER LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {users.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            No users found 😢
          </p>
        ) : (
          users.map((user) => (
            <Card key={user._id} className="shadow-sm mt-5">
              <Card.Body>
                <Card.Title className="text-lg font-semibold">
                  {user.name}
                </Card.Title>

                <Card.Text className="text-muted">
                  {user.email}
                </Card.Text>

                <Card.Text>Age: {user.age}</Card.Text>

                <div className="flex justify-end gap-2 mt-3 d-flex">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
      </div>

    </div>
  </div>
);
}



