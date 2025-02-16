const IntroCard = ({ text }) => {
  return (
    <div>
      <p className="title">자기소개</p>
      <p className="introduction">{text}</p>
    </div>
  );
};

export default IntroCard;
