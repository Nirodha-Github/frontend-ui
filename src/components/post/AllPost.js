import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function AllPost() {

    const [data, setData] = useState([
        { id: 1, name: 'Post 1', description: 'Description 1' },
        { id: 2, name: 'Post 2', description: 'Description 2' },
        { id: 3, name: 'Post 3', description: 'Description 3' },
      ]);
    
    const handleEdit = (id) => {
        alert(`Edit item with id ${id}`);
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAddNew = () => {
        const newItem = { id: data.length + 1, name: `Post ${data.length + 1}`, description: `Description ${data.length + 1}` };
        setData([...data, newItem]);
    };

  return (
    <div className="container mt-4">
        <Link className="btn btn-primary mb-3 float-end" to="/post/new">Add New</Link>
        <table className="table table-striped">
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item.id)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

export default AllPost