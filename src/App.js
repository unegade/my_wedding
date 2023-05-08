import "./App.css";
import "./font.css";
import DearGuest from "./components/DearGuest";
import Footer from "./components/Footer";
import CountdownToWedding from "./components/CountdownToWedding";
import Schedule from "./components/Schedule";
import MainInvite from "./components/MainInvite";
import ColorPallete from "./components/ColorPallete";
import Map from "./components/Map";
import Contacts from "./components/Contacts";
import LovePhrases from "./components/LovePhrases";
import Calendar from "./components/Calendar";
import Gift from "./components/Gift";
import { Grid } from "react-flexbox-grid";
import AddToCalendar from "./components/AddToCalendar";
// import { Parallax as BGParallax } from 'react-parallax';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const bride = "Konstantin";
  const groom = "Kristina";
  const queryParameters = new URLSearchParams(window.location.search);
  const guestFirstName = queryParameters.get("firstname");
  const guestLastName = queryParameters.get("lastname");
  const guestGender = queryParameters.get("gender");

  const wedding_date = new Date("July 8, 2023 16:00:00");
  return (
    // <Parallax blur={10} bgImage="./assets/images/main_background.jpg" bgImageAlt="the cat" strength={200}>
    <div className="App">
      <Grid fluid>
        <div className="container">
          <section>
            <MainInvite />
          </section>
          <div style={{ margin: "0 auto" }}>
            <section>
              <div className="page" style={{ fontSize: "30px" }}>
                <CountdownToWedding countDownDate={wedding_date} />
                <Calendar />
                <AddToCalendar />
              </div>
            </section>
            <section>
              <DearGuest
                firstName={guestFirstName}
                lastName={guestLastName}
                gender={guestGender}
                bride={bride}
                groom={groom}
              />
            </section>
            {/* <LovePhrases /> */}
            <section>
              <ColorPallete />
            </section>
            <section>
              <Schedule />
            </section>
            <section>
              <Map />
            </section>
            <section>
              <div className="page">
                <Contacts />
                <Gift />
                <Footer bride={bride} groom={groom} />
              </div>
            </section>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default App;
