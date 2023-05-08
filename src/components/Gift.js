import { Col, Row } from "react-flexbox-grid";
import giftIcon from "../assets/images/icons/gift-box-with-lace.png";
const Gift = () => {
  return (
    <Row
      style={{
        border: "thick double black",
      }}
    >
      <Col xs={2}>
        <img src={giftIcon} width={60} alt="" />
      </Col>
      <Col xs={10}>
        <span>
          Ваши пожелания в конвертах будут лучшими подарками, которые помогут
          исполнить наши мечты.
        </span>
      </Col>
    </Row>
  );
};
export default Gift;
