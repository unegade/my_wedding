import groomIcon from "../assets/images/icons/groom.png";
import brideIcon from "../assets/images/icons/bride.png";
import { Col, Row } from "react-flexbox-grid";

const Contacts = () => {
  let people = [
    { name: "Константин", phone: "79623144626", type: "groom" },
    { name: "Кристина", phone: "79086336513", type: "bride" },
  ];

  let telegramLink = (phone) => {
    return (
      <a href={"https://t.me/+" + phone}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png"
          alt="Telegram"
          border="0"
          width="50"
          height="50"
        />
      </a>
    );
  };

  let whatsAppLink = (phone) => {
    return (
      <a href={"https://wa.me/" + phone}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
          alt="WhatsApp"
          border="0"
          width="50"
          height="50"
        />
      </a>
    );
  };

  return (
    <div>
      <h2>Контакты</h2>
      <Row center="xs" middle="xs">
        {people.map((person, i) => (
          <Col key={i} xs={10} md={6}>
            <Row
              center="xs"
              middle="xs"
              style={{
                margin: "5px",
                border: "1px solid",
                borderRadius: "5px",
              }}
            >
              <Col xs={2}>
                <img
                  src={person.type === "groom" ? groomIcon : brideIcon}
                  width={50}
                  alt=""
                />
              </Col>
              <Col xs={6}>
                <h3>{person.name}</h3>
                <span>+{person.phone}</span>
              </Col>
              <Col xs={2}>{telegramLink(person.phone)}</Col>
              <Col xs={2}>{whatsAppLink(person.phone)}</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Contacts;
