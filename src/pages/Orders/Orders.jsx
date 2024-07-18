/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React from "react";
import "./Orders.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../../assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");

    if (response.data.success === "true") {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    console.log(event, orderId);
    if (response.data.success) {
      await fetchAllOrders();
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order__add">
      <div className="order__add__list">
        {orders.map((order, index) => {
          return (
            <div key={index} className="order__add__list__item">
              <img src={assets.parcelIcon} alt="" />
              <div>
                <p className="order__add__list__item__food">
                  {order.items.map((item, index) => {
                    let str = item.name + "x" + item.quantity;
                    if (index === order.items.length - 1) {
                      return str;
                    } else {
                      return str + ", ";
                    }
                  })}
                </p>

                <p className="order__add__list__item__name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order__add__list__item__address">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="order__add__list__phone">{order.address.phone}</p>
              </div>
              <p>Items : {order.items.length}</p>
              <p>Rs.{order.amount}</p>
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
              >
                <option value="Food Processing">Food processing</option>
                <option value="Out for Delivery"> Out for delivery</option>
                <option value="Delivered"> Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
