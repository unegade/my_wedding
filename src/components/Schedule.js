import "./shared-styles.css";
import cakeIcon from "../assets/images/icons/wedding-cake.png";
import champagneIcon from "../assets/images/icons/champagne-glasses.png";
import receptionIcon from "../assets/images/icons/wedding-reception.png";
import archIcon from "../assets/images/icons/wedding-arch.png";
import luggageIcon from "../assets/images/icons/honeymoon-luggage.png";
import { Col, Row } from "react-flexbox-grid";
const Schedule = () => {
  let program = [
    {
      time: "16:00",
      title: "Фуршет, Сбор гостей.",
      icon: champagneIcon,
    },
    {
      time: "17:00",
      title: "Торжественная церемония.",
      icon: archIcon,
    },
    {
      time: "18:00",
      title: "Банкет.",
      icon: receptionIcon,
    },
    {
      time: "21:00",
      title: "Торт.",
      icon: cakeIcon,
    },
    {
      time: "00:00",
      title: "Окончание.",
      icon: luggageIcon,
    },
  ];
  return (
    <div className="Glass">
      <h2>Программа дня</h2>
      <div>
        {program.map((event, i) => (
          <Row key={i} style={{ margin: "20px" }} middle="xs">
            <Col>
              <img src={event.icon} alt="" width={70} />
            </Col>
            <Col style={{ margin: "0px 10px", textAlign: "start" }}>
              <h3>{event.time}</h3>
              {event.title}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};
export default Schedule;
