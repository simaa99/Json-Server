import React from "react";
import { Link } from "react-router-dom";
import useProductData from "../hooks/useProductData";

function Home() {
  const { data, loading, error, deleteProduct } = useProductData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function handleDelete(id) {
    const confirmDelete = window.confirm("Do you like to delete?");
    if (confirmDelete) {
      deleteProduct(id);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of products</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.description}</td>
                <td>{d.price}$</td>
                <td>
                  <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">
                    Read
                  </Link>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(d.id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
