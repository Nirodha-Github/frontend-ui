import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewPost() {
  const [formData, setFormData] = useState({
    title: '',
    user_id: '',
    content: ''
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users');
        const data = await response.json();
        console.log(response);
        setUsers(data);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Call your API to store the post
       const response = await axios.post('http://localhost:8000/api/posts', formData);
  
        // Log the response (you can handle it as needed)
        console.log(response.data);
  
        // Clear the form after successful submission
        setFormData({
          title: '',
          content: ''
        });
      } catch (error) {
        console.error('There was an error submitting the form', error);
      }
  
  };

  return (
    <div className="container mt-4">
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">user_id</label>
          <select
            className="form-select"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
        >
            <option value="">Select user_id</option>
            {users.map((user) => (
            <option key={user.id} value={user.name}>
                {user.name}
            </option>
            ))}
        </select>
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="5"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
