import React from "react";
import "./ExhibitionList.scss";

const ExhibitionList = props => {
  return (
    <>
      <ul className="exhibition-list">
        <li className="exhibition-list__item">
          <img
            src="https://muzei-mira.com/templates/museum/images/paint/devyatyy-val-ayvazovskiy+.jpg"
            alt="pic-1"
            className="exhibition-list__item_picture"
          />
          <div className="exhibition-list__item_info">
            <p className="exhibition-list__item_info_text">
              Выставка И.К. Айвазовского
            </p>
            <hr />
            <p className="exhibition-list__item_info_text">C 18 по 25 марта</p>
            <p className="exhibition-list__item_info_text">ХНАТОБ</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ExhibitionList;
