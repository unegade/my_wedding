import "./shared-styles.css";
const Footer = ({ bride, groom }) => {
  return (
    <div className="Glass">
      <div>
        Если у вас будут какие-либо вопросы, пожалуйста, не стесняйтесь
        обращаться к нам.
      </div>
      <div></div>
      <div>
        Ваши {bride} и {groom}
      </div>
    </div>
  );
};

export default Footer;
