const InfoCard = () => {
  return (
    <div>
      <p className="title">희망근무조건</p>
      <div className="row">
        <p className="subtitle">근무지</p>
        <p>서울 중랑구 신내동</p>
      </div>
      <div className="row">
        <p className="subtitle">근무시간</p>
        <div className="column">
          <p>협의가능</p>
          <p>목 14:00 ~ 15:00</p>
          <p>금 14:00 ~ 15:00</p>
        </div>
      </div>
      <div className="row">
        <p className="subtitle">급여</p>
        <p>추후 협의</p>
      </div>
    </div>
  );
};

export default InfoCard;
