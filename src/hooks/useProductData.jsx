import { useState, useEffect } from "react";
import axios from "axios";

const useProductData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3030/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  const addProduct = (product) => {
    axios
      .post("http://localhost:3030/products", product)
      .then((res) => {
        setData([...data, res.data]);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3030/products/${id}`)
      .then(() => {
        setData(data.filter((product) => product.id !== id));
      })
      .catch((err) => {
        setError(err);
      });
  };

  const updateProduct = (id, updatedProduct) => {
    axios
      .put(`http://localhost:3030/products/${id}`, updatedProduct)
      .then((res) => {
        setData(data.map((product) => (product.id === id ? res.data : product)));
      })
      .catch((err) => {
        setError(err);
      });
  };

  return { data, loading, error, addProduct, deleteProduct, updateProduct };
};

export default useProductData;
