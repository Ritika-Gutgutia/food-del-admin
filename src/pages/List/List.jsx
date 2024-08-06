/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars*/
import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeFoodHandler = async (itemId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: itemId });
    // we made a post request and removed that item
    // if (response.data.success) {
    //   setList(response.data.data);
    //   toast.success(response.data.message);
    // } else {
    //   toast.error(response.data.message);
    // }
    console.log(response.data.data);
    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.error);
    }
    // setList(list);
    // console.log(list);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list flex-col">
      <p>All Foods List</p>
      {list.map((item, index) => {
        return (
          <div key={index} className="list__table__format">
            <img
              className="list__table__format__image"
              src={`${url}/uploads/` + item.image}
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Rs.{item.price}</p>
            <p
              onClick={() => removeFoodHandler(item._id)}
              className="list__table__format__cross"
            >
              x
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
