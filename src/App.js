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
    if (
      inputName &&
      inputDesc &&
      inputCategory &&
      inputQuantity &&
      inputPrice
    ) {
      alert(
        `Product Name: ${inputName}\nProduct Description: ${inputDesc}\nProduct Category: ${inputCategory}\nProduct Quantity: ${inputQuantity}\nProduct Price: ${inputPrice}`
      );
    } else {
      alert("Data missing! All fields are mandatory.");
    }
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
      <form id="product-form">
        <h3>New Product</h3>
        <fieldset>
          <input
            id="name"
            type="text"
            name="name"
            value={inputName}
            placeholder="Product name"
            tabIndex="1"
            required
            autoFocus
            size="20"
            onChange={getInputName}
          ></input>
        </fieldset>

        <fieldset>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Product description"
            tabIndex="2"
            value={inputDesc}
            required
            size="20"
            onChange={getInputDesc}
          ></input>
        </fieldset>

        <fieldset>
          <select
            value={inputCategory}
            tabIndex="3"
            onChange={getInputCategory}
            type="select"
          >
            <option value="select-category">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="grocery">Grocery</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="clothes">Clothes</option>
            <option value="books">Books</option>
          </select>
        </fieldset>

        <fieldset>
          <input
            id="quantity"
            type="text"
            name="quantity"
            placeholder="Quantity"
            tabIndex="4"
            value={inputQuantity}
            required
            size="20"
            onChange={getInputQuantity}
          ></input>
        </fieldset>

        <fieldset>
          <input
            id="price"
            type="text"
            name="price"
            tabIndex="5"
            placeholder="price"
            value={inputPrice}
            required
            size="20"
            onChange={getInputPrice}
          ></input>
        </fieldset>

        <fieldset>
          <button
            id="new-submit"
            name="submit"
            type="submit"
            data-submit="...sending"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            id="new-cancel"
            name="cancel"
            type="cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
}
