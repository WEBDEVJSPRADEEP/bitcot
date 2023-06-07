import React, { useState } from "react";
import First from "./Component/First";

export default function Data() {
  const data1 = [
    {
      id: 1,
      category: "student",
      name: "Mohan",
      number: "5785664545",
      email: "Mohan@gmail.com",
    },
    {
      id: 2,
      category: "teacher",
      name: "Sohan",
      number: "5785645234",
      email: "Sohan@gmail.com",
    },
    {
      id: 3,
      category: "professor",
      name: "Rohan",
      number: "2455454545",
      email: "Rohan@gmail.com",
    },
    {
      id: 4,
      category: "student",
      name: "Aditya",
      number: "5654544545",
      email: "Aditya@gmail.com",
    },
    {
      id: 5,
      category: "teacher",
      name: "Aman",
      number: "3985264545",
      email: "Aman@gmail.com",
    },
    {
      id: 6,
      category: "professor",
      name: "Rohit",
      number: "3985264545",
      email: "Rohit@gmail.com",
    },
    {
      id: 7,
      category: "student",
      name: "Raghav",
      number: "3985264545",
      email: "Raghav@gmail.com",
    },
    {
      id: 8,
      category: "teacher",
      name: "Aryan",
      number: "3985264545",
      email: "Aryan@gmail.com",
    },
    {
      id: 9,
      category: "professor",
      name: "Aryan",
      number: "3985264545",
      email: "Aryan@gmail.com",
    },
    {
      id: 10,
      category: "student",
      name: "Aryan",
      number: "3985264545",
      email: "Aryan@gmail.com",
    },
    {
      id: 11,
      category: "teacher",
      name: "Aryan",
      number: "3985264545",
      email: "Aryan@gmail.com",
    },
    {
      id: 12,
      category: "professor",
      name: "Aryan",
      number: "3985264545",
      email: "Aryan@gmail.com",
    },
  ];
  const [data, setData] = useState(data1);
  const [text, setText] = useState([]);
  const [pop, setPop] = useState(false);
  const [edit, setEdit] = useState(false);
  const [singleItem, setSingleItem] = useState({});
  const [add, setAdd] = useState(false);
  const [cIndex, setCIndex] = useState(0);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    category: "",
  });

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const searchHandle = (e) => {
    setText(e.target.value);
    let a = data1.filter((item) => {
      if (text === "") {
        return item;
      } else {
        const itemDt = item?.category ? item?.category.toUpperCase() : "";
        const textDt = text?.toString().toUpperCase();
        return itemDt.indexOf(textDt) > -1;
      }
    });
    setData(a);
  };

  const handleDelete = (demo) => {
    console.log("click");
    alert("Do you really want to delete this data?");
    const deleteDate = data1.filter((item) => item.name !== demo);
    setData(deleteDate);
  };

  const handlePop = (index, item) => {
    setPop(true);
    console.log(item);
    setSingleItem(item);
    console.log(index);
    setPop(!pop);
  };
  const handleEdit = (index, item) => {
    console.log(item);
    console.log(index);
    setCIndex(index);
    setEdit(true);
    setEdit(!edit);
    setInputs({
      name: item.name,
      email: item.email,
      number: item.value,
      category: item.category,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    let a = data.map((item, index) => {
      let temp = Object.assign({}, item);
      if (cIndex === index) {
        temp.name = inputs.name;
        temp.number = inputs.number;
        temp.category = inputs.category;
        temp.email = inputs.email;
      }
      return temp;
    });
    setInputs({
      name: "",
      number: "",
      category: "",
    });
    setCIndex(0);
    setEdit(false);
    setData(a);
  };

  const addBtn = () => {
    console.log("add");
    setAdd(true);
    setAdd(!add);
  };
  const handleAddData = (e) => {
    e.preventDefault();

    let obj = {
      name: inputs.name,
      number: inputs.number,
      email: inputs.email,
      category: inputs.category,
    };

    setData([...data, obj]);
    setInputs({
      name: "",
      email: "",
      number: "",
      category: "",
    });
  };

  return (
    <>
      {/* pop section */}
      {pop ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Category</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <>
                <td>{singleItem?.id}</td>
                <td>{singleItem?.name}</td>
                <td>{singleItem?.number}</td>
                <td>{singleItem?.category}</td>
                <td>{singleItem?.email}</td>
              </>
            </tr>
          </tbody>
        </table>
      ) : null}
      {/* edit section */}
      {edit ? (
        <form className="editForm">
          <h3 style={{ color: "whitesmoke" }}>Edit Data</h3>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleInput}
            // value={name}
            // onChange={handleName}
          />
          <br />
          <br />
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={inputs.number}
            onChange={handleInput}
            // value={number}
            // onChange={handleNumber}
          />
          <br />
          <br />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={inputs.category}
            onChange={handleInput}
            // value={category}
            // onChange={handleCategory}
          />
          <br />
          <br />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleInput}
            // value={email}
            // onChange={handleEmail}
          />
          <br />
          <br />
          <button onClick={(val) => handleUpdate(val)}>Update</button>
        </form>
      ) : null}
      {/* Add button */}
      {add ? (
        <form className="editForm">
          <h3 style={{ color: "whitesmoke" }}>Add New-Data</h3>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleInput}
          />
          <br />
          <br />
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={inputs.number}
            onChange={handleInput}
          />
          <br />
          <br />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={inputs.category}
            onChange={handleInput}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleInput}
          />
          <br />
          <br />
          <button onClick={(e) => handleAddData(e)}>Add</button>
        </form>
      ) : null}
      <div className="backSide">
        <div className="header">
          <h1>All Contacts</h1>
          <button onClick={addBtn}>+</button>
        </div>
        <div className="middle">
          <input
            type="search"
            placeholder="Search Contact"
            value={text}
            onChange={searchHandle}
          />
        </div>
        {data.map((item, index) => {
          return (
            <>
              <First
                name={item.name}
                index={index}
                number={item.number}
                email={item.email}
                category={item.category}
                handleDelete={() => handleDelete(item.name)}
                handlePop={() => handlePop(index, item)}
                handleEdit={() => handleEdit(index, item)}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
