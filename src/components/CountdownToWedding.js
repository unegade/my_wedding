import { useState, useEffect } from "react";
import "./count-down.css";
import { Col, Row } from "react-flexbox-grid";
const СountdownToWedding = ({ countDownDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const downTime = countDownDate.getTime();
      const now = new Date().getTime();
      const distance = downTime - now;

      const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const daysString =
    days === 1
      ? "день"
      : days === 2 || days === 3 || days === 4
      ? "дня"
      : "дней";
  const hoursString =
    hours === 1
      ? "час"
      : hours === 2 || hours === 3 || hours === 4
      ? "часа"
      : "часов";
  const minutesString =
    minutes === 1
      ? "минута"
      : minutes === 2 || minutes === 3 || minutes === 4
      ? "минуты"
      : "минут";
  const secondsString =
    seconds === 1
      ? "секунда"
      : seconds === 2 || seconds === 3 || seconds === 4
      ? "секунды"
      : "секунд";

  return (
    // <div style={{ }} className='count-down'>
    <div>
      <h2>До начала осталось:</h2>
      <Row center="xs">
        <Col xs>
          <div>{days}</div>
          <div>{daysString}</div>
        </Col>
        <Col xs>
          <div>{hours}</div>
          <div>{hoursString}</div>
        </Col>
        <Col xs>
          <div>{minutes}</div>
          <div>{minutesString}</div>
        </Col>
        <Col xs>
          <div>{seconds}</div>
          <div>{secondsString}</div>
        </Col>
      </Row>
      {/* <div>{`${days} ${daysString}, ${hours} ${hoursString}, ${minutes} ${minutesString}, ${seconds} ${secondsString}`}</div> */}
    </div>
  );
};

export default СountdownToWedding;
