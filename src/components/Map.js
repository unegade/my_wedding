// import { Helmet } from 'react-helmet';
import locationIcon from "../assets/images/icons/wedding-location.png";
const Map = () => {
  const styles = {
    height: "50vh",
    filter: "hue-rotate(160deg) grayscale(30%)",
    borderRadius: "16px",
  };

  return (
    <div>
      <img src={locationIcon} width={50} alt="" />
      <h2>Местоположение</h2>
      <div>г.Екатеринбург, ул.Восточная, д.51</div>
      <div>
        Заезд через шлакбаум, при въезде нажать кнопку. Парковка для вас будет
        бесплатной.
      </div>
      <div>
        Вход в здание через железную дверь, подняться на лифте на 8й этаж, затем
        по лестнице на 9й этаж.
      </div>
      {/* <div id='mymap' style={styles}>
            <Helmet>
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3cec15d2c776c6b444728fbb10d0448d127db066ae33a3c973e9bf95da4aa05a&amp;lang=ru_RU&amp;scroll=false&amp;id=mymap"></script>
            </Helmet>
        </div> */}
      {/* <a href="yandexmaps://maps.yandex.com/?ll=56.818480, 60.641397&z=12">Открыть в яндекс навигаторе</a><br />
        <a href="https://www.google.com/maps/dir//56.818480,60.641397">Открыть в google навигаторе</a><br />
        <a href="geo:56.818480,60.641397;u=35">Открыть где-то</a> */}
      {/* <div style={styles}>
            <iframe
                title='yandexmap'
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cec15d2c776c6b444728fbb10d0448d127db066ae33a3c973e9bf95da4aa05a&amp;scroll=false&amp;source=constructor"
                width="100%" height="100%" frameBorder="0"
                scrolling="no"
            />
        </div> */}
      <div style={styles}>
        <iframe
          title="googlemap"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0,%2051+(Wedding)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&amp;hl=ru&amp;maptype=satellite"
        />
      </div>
    </div>
  );
};
export default Map;
