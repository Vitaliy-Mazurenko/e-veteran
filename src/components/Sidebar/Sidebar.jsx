import { useState } from "react";
import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import Collapse from "@mui/material/Collapse";

import message from "../../assets/message.svg";
import contacts from "../../assets/contacts.svg";
import analitycs from "../../assets/analitycs.svg";
import arrow from "../../assets/arrow.svg";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={style.sidebar}>
      <div
        className={`${style.navLink} ${style.dropdown}`}
        onClick={handleClick}
      >
        <span>
          <img className={style.linkIcon} src={message} alt="" />
          Чат-бот
        </span>
        <div className={style.dropdownBtn}>
          <img className={`${open ? style.rotate : ""}`} src={arrow} alt="" />
        </div>
      </div>
      <Collapse
        className={style.dropdownList}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <NavLink to="/form" className={style.navLink}>
          <span>Форма Заяви</span>
        </NavLink>
        <NavLink to="/question" className={style.navLink}>
          <span>Питання-Відповіді</span>
        </NavLink>
        <NavLink to="/mailing" className={style.navLink}>
          <span>Розсилка</span>
        </NavLink>
      </Collapse>
      <NavLink to="/application" className={style.navLink}>
        <span>
          <img className={style.linkIcon} src={contacts} alt="" />
          Заяви на Проєкт
        </span>
      </NavLink>

      <NavLink to="/analyst" className={style.navLink}>
        <span>
          <img className={style.linkIcon} src={analitycs} alt="" />
          Аналітика
        </span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
