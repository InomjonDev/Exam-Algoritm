import React from "react";
import { Link } from "react-router-dom";
import "./Empty.css";

function Empty({ title, url, desc }) {
  return (
    <div className="empty__wrapper">
      <div className="empty__img">
        <img src={url} alt="Cat" width={64} />
      </div>
      <h2 className="empty__title">{title}</h2>
      <p className="empty__text">{desc}</p>
      <Link className="empty__btn" to={"/"}>
        На главную
      </Link>
    </div>
  );
}

export default Empty;
