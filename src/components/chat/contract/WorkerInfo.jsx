const WorkerInfo = () => {
  return (
    <div>
      <p className="big title">근무 요건</p>
      <div className="item-div">
        <p className="small">근무지역</p>
        <div>
          <p className="big">서울특별시 마포구 합정동</p>
          <p className="big">서울특별시 서대문구 대현동</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">근무일정</p>
        <div>
          <p className="big">목 12:00 ~ 14:00</p>
          <p className="big">금 12:00 ~ 14:00</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">급여</p>
        <div>
          <p className="big">시급 13,000원</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">근무종류</p>
        <div>
          <p className="big">방문요양</p>
        </div>
      </div>
    </div>
  );
};

export default WorkerInfo;
