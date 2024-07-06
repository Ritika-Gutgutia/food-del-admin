/* eslint-disable no-unused-vars*/
import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div className="add">
      <form className="add__form">
        <div className="add__form__content add__form__product__name">
          <p> Product name</p>
          <input
            className="add__form__content__input"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add__form__content add__form__product__description">
          <p>Product description</p>
          <textarea
            name="description"
            className="add__form__content__input"
            rows="6"
            placeholder="Describe product here"
            required
          />
        </div>
        <div className=" add__form__content add_form__img__upload">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.uploadArea} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add__form__product__category__price">
          <div className="add__form__content add__form__product__category">
            <p>Product category</p>
            <select
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
              className="add__form__content__input"
              type="Number"
              min="0"
              placeholder="Rs. 20"
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
