import React from "react";
import { useParams, Link } from "react-router-dom";
import useProductData from "../hooks/useProductData";

function Read() {
  const { id } = useParams();
  const { data } = useProductData();

  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Product Detail</h3>
        <div className="mb-2">
          <strong>Name: {product.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Description: {product.description}</strong>
        </div>
        <div className="mb-2">
          <strong>Price: {product.price}$</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
