import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrashCan,
  faPenToSquare,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function First(props) {
  return (
    <>
      <div className="data">
        <label className="left">
          <h3>{props.index + 1}</h3>

          <div style={{ display: "flex", gap: "30px" }}>
            <FontAwesomeIcon icon={faUser} />
            <h3>{props.name}</h3>
            <h3>{props.number}</h3>
            <h3>{props.category}</h3>
          </div>
        </label>
        <label className="right">
          <FontAwesomeIcon onClick={() => props.handlePop()} icon={faEye} />
          <FontAwesomeIcon
            onClick={() => props.handleDelete()}
            icon={faTrashCan}
          />
          <FontAwesomeIcon
            onClick={() => props.handleEdit()}
            icon={faPenToSquare}
          />
        </label>
      </div>
    </>
  );
}
