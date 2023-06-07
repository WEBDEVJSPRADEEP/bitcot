import React from "react";
import First from "./First";

export default function Data() {
  const data = [
    {
      id: 1,
      name: "Mohan",
      mobile: "5785664545",
      email: "Mohan@gmail.com",
    },
    {
      id: 2,
      name: "Sohan",
      mobile: "57856545234",
      email: "Sohan@gmail.com",
    },
    {
      id: 2,
      name: "Rohan",
      mobile: "24554564545",
      email: "Rohan@gmail.com",
    },
    {
      id: 2,
      name: "Aditya",
      mobile: "5654544545",
      email: "Aditya@gmail.com",
    },
    {
      id: 2,
      name: "Aman",
      mobile: "3985264545",
      email: "Aman@gmail.com",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <First name={item.name} mobile={item.mobile} email={item.email} />
          </>
        );
      })}
    </>
  );
}
