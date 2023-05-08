import "./shared-styles.css";
import suitIcon from "../assets/images/icons/suit-and-bow-tie.png";
import dressIcon from "../assets/images/icons/wedding-dress.png";
import { Row, Col } from "react-flexbox-grid";
const ColorPallete = () => {
  let colors = [
    "#b9b7f9",
    "#7062bc",
    "#a2ccf4",
    "#6389de",
    "#e8d4ce",
    "#c3a5a6",
  ];
  let brush = (color) => {
    let rotate = Math.floor(Math.random() * 360);
    return (
      <svg
        version="1.1"
        id="Слой_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 720 720"
        style={{
          enableBackground: "new 0 0 720 720",
          fill: color,
          transform: "rotate(" + rotate + "deg)",
        }}
        xmlSpace="preserve"
      >
        <path
          d="M670,307.9c0.7-16.7-12.3-122.5-42.1-115.8c-5-23.1-12.5-45.8-26.5-65.8c-5.5-9.2-13.1-17.1-23.9-21.5
       c-3-2.2-7.1-0.6-9.5,1.8c-6.7,2.3-9.7,7.6-12.6,13.1c-4.8,6.6-7.5,14.1-9.9,21.6c-7.3-6-16.5-8.1-26.8-0.8
       c-4.1,6.3-7.3,12.8-9.9,19.6c-2.5-4.7-5.1-9.3-7.9-13.8c-7.6-12.7-14.2-27.2-30-32.9c-3.5-1.8-7.6-2.8-11.6-2.5
       c-4.4,0.2-7.8,3.4-11.6,5.1c-5.1,3.8-6.8,10.4-10.4,15.3c-2.5,5.8-4.6,11.7-6.5,17.6c-4.4,4.7-9.2,9.1-12.8,14.3
       c-12.6,18-18.8,38.4-22.4,59.4c-0.8-16-1.9-31.9-3-47.9c-1.4-23.1-4.8-46.1-7.5-69.1c-2.5-19-3.7-38.5-10.7-56.7
       c-2.2-9.3-10.3-30.5-22.7-24c-6.4,2.6-10.2,7.4-11.4,14.4c-2.1,6.4-4.2,12.7-6.2,19c-3.7,16.1-6.1,32.5-7.5,49
       c-15.1-27.5-34.7-55.4-46.6-40.8c-14.4,20.4-20,44.2-23.4,68c-2.1,15-3.3,30-3.9,45.1c-1.1,1.7-2,3.4-3,5.1
       c-4.8,7.2-7.7,15.2-9.9,23.5c-2.6-7.2-5.2-14.5-7.8-21.7c-0.2-0.6-0.4-1.2-0.6-1.8c-3.3-10.9-16.4-55.9-32.4-46.6
       c-13.1,4.9-12.6,22.7-17.6,33.5c-3.5,14.7-5.8,29.6-7.2,44.5c-1.7,0.9-3.3,1.8-4.9,2.8c-0.1-0.2-0.2-0.3-0.3-0.4
       c-4.8-7.2-10-14.1-14.9-21.3c-0.3-0.6-0.6-1.1-0.8-1.6c-7.8-14.6-18.1-55.5-33.5-46.2c-2.2-2-4.3-4.1-6.5-6
       c-9-10.2-15.4-12-24.3,0.3c-6.3,8.2-9.9,17.2-12.4,26.7c-0.3-0.2-0.7-0.3-1-0.4c-0.9-0.1-1.7,0.1-2.5,0.5
       c-9.3,3.2-12.2,10.9-16.6,18.3c-3.2,8.9-6.3,17.9-8.1,27.2c-0.6,2.3-1.2,4.6-1.9,6.9c-28.9,56.6-26,159.6-10.4,220
       c9.6,36.4,29.5,69.4,45.8,103.5c6.4,11.6,10.5,24.3,17.4,35.6c2.3,6.4,8.2,11,15.2,12.7c2.2-0.1,4.2-0.9,5.8-2.4
       c2.3-0.7,4-1.9,5.4-3.5c8.1-10.5,11.6-22.8,14.9-35c3.8,0,7.7,1.3,11,3.1c1.3,0.6,2.7,1.3,4,1.9c9,4.5,17.9,10.7,28.1,12.1
       c6.8,46.8,19.5,94.9,44.7,74.4c16.2-18.8,22.1-43.5,27.8-66.4c5.7-26.2,3.4-21.6,13-63.3c3.1,7,6,14,8.6,21.2c0.7,2.2,1.3,4.4,2,6.6
       c4.7,15.8,6.9,32.5,17.6,46.1c2.7,1.5,5.5,2.9,8.2,4.4c7.8-3.6,14.3-7.4,15.5-16.6c2.4-6.1,4.3-12.3,6-18.5c1.1,3.5,2.2,7,3.5,10.5
       c2.6,6,6.4,11.6,10.1,17.1c5.1,2.3,9.4,7.1,14.6,2.6c1.8-0.7,3.3-1.6,4.7-2.5c2.2,0.3,4.3,0.9,6.3,1.6c0.3,0.4,0.7,0.7,1.1,1.1
       c4.9,18.3,8.9,37.6,22.4,52.1c3.6,1.4,7.1,4.8,10.9,4.9c15.5-5.3,22.3-19.2,28.7-31.8c4.4-11.1,7.8-22.4,10.6-33.8
       c2.2,3.8,4.6,7.4,8.3,10c3.3,1.7,6.5,3.4,9.7,5.1c12.2-1.4,18.4-12.5,22.7-21.9c8-21.9,12.8-44.3,15.6-67.1c3.8,2,7.7,3.8,11.9,5.1
       c9.4,1.1,18.5,3.4,26.9,7.4c3.5,1.2,6.6,3.8,10.2,4.6c1.7,8.5,4.2,16.9,7.5,25c1.2,9.1,7.8,13.1,15.5,16.6c2.7-1.5,5.5-2.9,8.2-4.4
       c15.3-24.5,21-59.8,22.2-96.8c1.5,2.1,3.2,4,5.6,5.4c2.4,1,4.9,2.5,7.5,4c2.8,7.5,6.4,14.6,11.6,21.2c22.3,16.9,31.8-25.4,36.3-39.1
       C670.5,406.9,673.3,357.2,670,307.9z"
        />
      </svg>
    );
  };
  return (
    <div
      style={
        {
          // height: "50vh"
        }
      }
      className="Glass"
    >
      <Row center="xs" middle="xs" style={{ margin: "15px" }}>
        <Col xs={2}>
          <img src={suitIcon} width={50} alt="" />
        </Col>
        <Col xs>
          <h2>Дресс-код</h2>
        </Col>
        <Col xs={2}>
          <img src={dressIcon} width={50} alt="" />
        </Col>
      </Row>
      {/* <div style={{display: "inline-block"}}> */}
      {/* </div> */}
      <p>
        Мы будем благодарны, если вы выберите для своей одежды цвета
        представленные ниже, чтобы соответствовать нашей цветовой гамме. Мы
        надеемся, что вы сможете поддержать нашу идею и создадите красивую и
        гармоничную картину на нашем празднике.
      </p>
      {/* <div>Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры</div> */}
      <Row style={{ margin: "20px 0px" }}>
        {colors.map((color, i) => (
          <Col key={i} xs={4}>
            {brush(color)}
          </Col>
        ))}
      </Row>
      <p>
        Спасибо за ваше понимание и содействие в создании нашего особенного дня.
      </p>
    </div>
    // <svg
    //     fill={color}
    //     height="200px" width="200px" version="1.1" id="Layer_1"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 512.00 512.00"
    //     data-darkreader-inline-fill="" style={{"--darkreader-inline-fill": "#262626", "--darkreader-inline-stroke": "#e1dfde"}}
    //     stroke="#000000" stroke-width="0.00512" data-darkreader-inline-stroke=""
    //     transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    //     <g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="80.683,431.315 80.683,431.316 80.684,431.316 "></polygon> </g> </g> <g> <g>
    //         <path d="M462.547,221.286c-37.549-32.548-72.909-46.297-99.222-72.61c-26.313-26.313-40.064-61.674-72.611-99.222 c-54.125-62.442-149.318-66.317-208.266-8.406c-0.787,0.774-1.57,1.552-2.351,2.336C-26.93,151.047-26.662,323.969,80.684,431.316 s280.269,107.615,387.932,0.587c0.785-0.78,1.564-1.564,2.336-2.351C528.863,370.604,524.989,275.411,462.547,221.286z M113.305,258.251c-21.492-2.422-36.951-21.807-34.529-43.299s21.807-36.951,43.298-34.529 c21.492,2.422,36.951,21.807,34.529,43.299C154.183,245.213,134.797,260.673,113.305,258.251z M190.735,376.644 c-15.293,15.293-40.087,15.293-55.381,0s-15.293-40.087,0-55.381c15.293-15.293,40.087-15.293,55.381,0 S206.028,361.351,190.735,376.644z M211.585,136.22c-18.313,11.507-42.486,5.989-53.993-12.324 c-11.507-18.313-5.989-42.486,12.324-53.993c18.313-11.507,42.486-5.989,53.993,12.324S229.898,124.713,211.585,136.22z M297.046,433.222c-21.492,2.422-40.877-13.038-43.299-34.529c-2.422-21.492,13.038-40.877,34.529-43.299 c21.492-2.422,40.877,13.038,43.298,34.529C333.997,411.416,318.538,430.802,297.046,433.222z M442.095,342.083 c-11.507,18.313-35.68,23.83-53.993,12.324c-18.313-11.507-23.83-35.68-12.324-53.993c11.507-18.313,35.68-23.83,53.993-12.324 C448.084,299.597,453.602,323.77,442.095,342.083z">
    //         </path> </g> </g>
    //     </g>
    // </svg>
    // <img
    // src='https://www.svgrepo.com/download/267988/paint-palette-art.svg'
    // key={i}
    // style={{
    //     // borderRadius: "50%",
    //     // maskImage: 'url(https://www.pngkey.com/png/full/4-45269_black-paint-brush-stroke-png-paint-brush-stroke.png)',
    //     width: "100px",
    //     // opacity: 1,
    //     // filter: "opacity(0.5) drop-shadow(0 0 0 blue)",
    //     height: "100px",
    //     // borderStyle: "1px white",
    //     // borderColor: "white",
    //     // boxShadow: "0px 0px 10px black",
    //     fill: color,
    //     color: color,
    //     backgroundColor: color,
    //     background: color,
    //     display: "inline-block",
    //     margin: "0px 10px"
    // }}></img>
  );
};

export default ColorPallete;
