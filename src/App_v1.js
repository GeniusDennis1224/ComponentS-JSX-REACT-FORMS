import { useState } from "react";

export default function App() {
  /* let prodName, prodDesc, prodCategory, prodQuantity, prodPrice;

  const elemName = document.getElementById("name");
  const elemDesc = document.getElementById("description");
  const elemCategory = document.getElementById("category");
  const elemQuantity = document.getElementById("quantity");
  const elemPrice = document.getElementById("price"); */

  const [inputName, setInputName] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputCategory, setInputCategory] = useState("null");
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const getInputName = (event) => {
    setInputName(event.target.value);
  };

  const getInputDesc = (event) => {
    setInputDesc(event.target.value);
  };

  const getInputCategory = (event) => {
    setInputCategory(event.target.value);
  };

  const getInputQuantity = (event) => {
    setInputQuantity(event.target.value);
  };

  const getInputPrice = (event) => {
    setInputPrice(event.target.value);
  };

  function handleSubmit() {
    alert(
      `Product Name: ${inputName}\nProduct Description: ${inputDesc}\nProduct Category: ${inputCategory}\nProduct Quantity: ${inputQuantity}\nProduct Price: ${inputPrice}`
    );
  }

  function handleCancel() {
    setInputName("");
    setInputDesc("");
    setInputCategory("");
    setInputQuantity("");
    setInputPrice("");
  }

  return (
    <div className="container">
      <form className="product-form">
        <div className="title">
          <p className="title-text">New Product</p>
        </div>
        <div className="details">
          <div className="prod-name">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={inputName}
              placeholder="product name..."
              required
              size="20"
              onChange={getInputName}
            ></input>
          </div>
          <div className="prod-description">
            <label htmlFor="description">Description: </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="product description..."
              value={inputDesc}
              required
              size="20"
              onChange={getInputDesc}
            ></input>
          </div>
          <div className="prod-category">
            <label htmlFor="category">Category: </label>
            <select value={inputCategory} onChange={getInputCategory}>
              <option value="null"></option>
              <option value="electronics">Electronics</option>
              <option value="grocery">Grocery</option>
              <option value="home-decoration">Home Decoration</option>
              <option value="clothes">Clothes</option>
              <option value="books">Books</option>
            </select>
          </div>
          <div className="prod-quantity">
            <label htmlFor="quantity">Quantity: </label>
            <input
              id="quantity"
              type="text"
              name="quantity"
              placeholder="quantity"
              value={inputQuantity}
              required
              size="20"
              onChange={getInputQuantity}
            ></input>
          </div>
          <div className="prod-price">
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              type="text"
              name="price"
              placeholder="price"
              value={inputPrice}
              required
              size="20"
              onChange={getInputPrice}
            ></input>
          </div>
        </div>
        <div className="btn">
          <button className="Submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
