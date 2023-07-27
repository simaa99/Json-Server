import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useProductData from "../hooks/useProductData";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, updateProduct } = useProductData();
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    const product = data.find((item) => item.id === parseInt(id));
    if (product) {
      setValues(product);
    }
  }, [data, id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    updateProduct(id, values);
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a Product</h1>
        <form onSubmit={handleUpdate}>
          <div className="mt-4 mb-3">
            <label htmlFor="name">Name of Product</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter the name of product"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description of product</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter the description of product"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">price of Product</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Enter the price of product"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
        
      </div>
    </div>
  );
}

export default Update;
