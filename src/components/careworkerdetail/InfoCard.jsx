const InfoCard = ({ regions, schedules, wage }) => {
  return (
    <div>
      <p className="title">희망근무조건</p>
      <div className="row">
        <p className="subtitle">근무지</p>
        <div className="column">
          {regions.map((item) => {
            return (
              <p key={item.region_id}>
                {item.city} {item.district} {item.neighborhood}
              </p>
            );
          })}
        </div>
      </div>
      <div className="row">
        <p className="subtitle">근무시간</p>
        <div className="column">
          {schedules.map((item) => {
            return (
              <p key={item.schedule_id}>
                {item.day} {item['start-date']} ~ {item['end-date']}
              </p>
            );
          })}
        </div>
      </div>
      <div className="row">
        <p className="subtitle">급여</p>
        <p>{wage}만 원</p>
      </div>
    </div>
  );
};

export default InfoCard;
