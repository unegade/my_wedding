import "./main-invite.css";
const MainInvite = () => {
  return (
    <div
      style={{
        color: "#ffffff",
        // height: "100vh",
        textShadow: "2px 2px 30px #000000",
        // background: "rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
      className="main-invite"
    >
      <div
        style={{
          fontSize: "calc(20px + 8vmin)",
          // fontFamily: "FrenchKissscript",
          fontFamily: "RougeScript",
          // paddingTop: "40px"
        }}
      >
        Wedding day
      </div>
      <div
        style={{
          fontFamily: "RougeScript",
          // fontSize: "22vw",
          fontSize: "calc(40px + 12vmin)",
          // margin: "60px 40px",
        }}
      >
        <div style={{ textAlign: "left" }}>Konstantin</div>
        <div style={{ margin: "-50px 0px -40px" }}>&</div>
        <div style={{ textAlign: "right" }}>Kristina</div>
      </div>
      <div
        style={{
          fontSize: "calc(10px + 6vmin)",
          fontFamily: "RougeScript",
          // margin: "auto",
          // bottom: "40px"
        }}
      >
        08.07.2023
      </div>
    </div>
  );
};

export default MainInvite;
