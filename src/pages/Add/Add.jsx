/* eslint-disable no-unused-vars*/
import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:5000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      // we have to reset this field value
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      console.log("Food added successfully");
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="add">
      <form className="add__form" onSubmit={onSubmitHandler}>
        <div className=" add__form__content add_form__img__upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadArea}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add__form__content add__form__product__name">
          <p> Product name</p>
          <input
            onChange={handleChange}
            value={data.name}
            className="add__form__content__input"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add__form__content add__form__product__description">
          <p>Product description</p>
          <textarea
            onChange={(e) => handleChange(e)}
            value={data.description}
            name="description"
            className="add__form__content__input"
            rows="6"
            placeholder="Describe product here"
            required
          />
        </div>

        <div className="add__form__product__category__price">
          <div className="add__form__content add__form__product__category">
            <p>Product category</p>
            <select
              onChange={(e) => handleChange(e)}
              className="add__form__product__category__select"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className=" add__form__content  add__form__product__price">
            <p> Product Price </p>
            <input
              onChange={handleChange}
              className="add__form__content__input"
              type="Number"
              min="0"
              placeholder="Rs. 20"
              name="price"
            />
          </div>
        </div>

        <button type="submit" className="add__form__button">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
