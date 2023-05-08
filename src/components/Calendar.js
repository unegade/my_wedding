import React from "react";
import AddToCalendar from "./AddToCalendar";
import heartsIcon from "../assets/images/icons/two-hearts.png";
import "./shared-styles.css";
function Calendar() {
  // const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const monthDays = 31;
  const startDate = new Date(2023, 6, 1); // 1 июля 2023 года - суббота
  const startDayOfWeek = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1;
  const numEmptyDays = startDayOfWeek;
  const numWeeks = Math.ceil((numEmptyDays + monthDays) / 7);

  const renderCalendar = () => {
    let calendarDays = [];
    for (let i = 1; i <= monthDays; i++) {
      const isCurrentDay = i === 8; // 8 июля 2023
      const style = isCurrentDay ? { backgroundColor: "yellow" } : {};
      calendarDays.push(
        <td key={i} style={style}>
          {!isCurrentDay ? i : <img src={heartsIcon} width={15} alt="♥" />}
        </td>
      );
    }
    for (let i = 0; i < numEmptyDays; i++) {
      calendarDays.unshift(<td className="empty" key={`empty${i}`}></td>);
    }
    for (let i = calendarDays.length; i < numWeeks * 7; i++) {
      calendarDays.push(<td className="empty" key={`empty${i}`}></td>);
    }

    let weeks = [];
    for (let i = 0; i < numWeeks; i++) {
      weeks.push(<tr key={i}>{calendarDays.slice(i * 7, (i + 1) * 7)}</tr>);
    }
    return weeks;
  };

  return (
    <div className="Glass">
      <div>
        <h2>Июль 2023</h2>
      </div>
      <table className="calendar" style={{ margin: "0 auto" }}>
        {/* <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead> */}
        <tbody>{renderCalendar()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
