import { useState } from "react";

import style from "./mailing.module.scss";
import search from "../../assets/search.svg";

const data = [
  {
    isChoosen: false,
    title: "Відкриття нового реабілітаційного центру",
    time: {
      start: { date: "08.12.2023", time: "01:00" },
      end: { date: "10.12.2023", time: "01:00" },
    },
    region: "Львівська",
    status: "Активна",
  },
  {
    isChoosen: false,
    title: "Відкриття нового реабілітаційного центру",
    time: {
      start: { date: "08.12.2023", time: "01:00" },
      end: { date: "10.12.2023", time: "01:00" },
    },
    region: "Сумська",
    status: "Завершена",
  },
];

function Mailing() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.mailing}>
      <div className={style.header}>
        <h3>Розсилка</h3>
        <button className={style.newMailing}>Створити Нову</button>
      </div>
      <div className={style.toolbar}></div>
      <div className={style.table}>
        <div className={style.head}>
          {isActive ? (
            <div className={style.control}></div>
          ) : (
            <div className={style.default}>
              <div className={style.searchBar}>
                <button className={style.searchBtn}>
                  <img className={style.searchIcon} src={search} alt="" />
                </button>

                <input
                  className={style.searchInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="asd"
                />
              </div>
              <div className={style.filters}>aaaa</div>
            </div>
          )}
        </div>
        <div className={style.list}>
          {data.map((item) => {
            return (
              <div key={data.title} y className={style.listItem}>
                <div className={style.check}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={item.isChoosen}
                  />
                </div>
                <div className={style.itemTitle}>{item.title}</div>
                <div className={style.date}>
                  <span>{item.time.start.date}</span>
                  <span>{item.time.start.time}</span>
                </div>
                <div className={style.date}>
                  <span>{item.time.end.date}</span>
                  <span>{item.time.end.time}</span>
                </div>
                <div className={style.region}></div>
                <div className={style.status}></div>
                <div className={style.status}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mailing;
