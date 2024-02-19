import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import person from "../../assets/Person.svg";

function Header() {
  return (
    <header>
      <Link to='/home' className={style.title}>е-Ветеран</Link>
      <div className={style.user}>
        <img src={person} alt="" />
      </div>
    </header>
  );
}

export default Header;
