import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NabBar = ({ userlogin, setUserlogin }) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const listbar = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const gotoLogin = () => {
    userlogin === false ? navigate("/login") : setUserlogin(false);
  };

  const fromimgtopage = () => {
    navigate("/");
  };
  const gotosearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/?q=${e.target.value}`);
    }
  };

  const closeopen = () => {
    sidebar === true ? setSidebar(false) : setSidebar(true);
  };
  return (
    <div>
      <div className="usersection">
        <FontAwesomeIcon icon={faUser} />
        <div className="loginspace" onClick={() => gotoLogin()}>
          {userlogin === true ? "로그아웃" : "로그인"}
        </div>
      </div>

      <div className="iconImg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/220px-H%26M-Logo.svg.png"
          onClick={() => fromimgtopage()}
        />
      </div>

      <div className="navbarlist">
        <ul>
          {listbar.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="navbarSearchIcon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(e) => gotosearch(e)}
          />
        </div>
      </div>

      <div className="sidebar">
        {sidebar === false ? (
          <FontAwesomeIcon icon={faBars} onClick={() => closeopen()} />
        ) : (
          ""
        )}
      </div>

      {sidebar === true ? (
        <div className="sidebox">
          <ul className="sidemenu">
            {listbar.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      {sidebar === true ? (
        <div className="sideclose">
          <FontAwesomeIcon icon={faX} onClick={() => closeopen()} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NabBar;
