const SeniorInfo = () => {
  return (
    <div>
      <p className="big title">어르신 정보</p>
      <div>
        <div className="item-div">
          <p className="small">이름</p>
          <p className="big">김나이</p>
        </div>
        <div className="item-div">
          <p className="small">성별</p>
          <p className="big">여</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">생년월일</p>
        <div>
          <p className="big">1963년 10월 11일</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">장기요양등급</p>
        <div>
          <p className="big">1급</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">주소</p>
        <div>
          <p className="big">서울특별시 마포구 합정동</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">동거인 여부</p>
        <div>
          <p className="big">배우자와 동거, 돌봄 시간 중 집에 있음</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">케어 필요 항목</p>
        <div>
          <p className="big">식사보조, 배변보조</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">치매증상</p>
        <div>
          <p className="big">했던 말을 반복하는 등 단기 기억 장애</p>
          <p className="big">가족을 알아보지 못함</p>
        </div>
      </div>
      <div className="item-div">
        <p className="small">기타 보유 질병/질환</p>
        <div>
          <p className="big">없음</p>
        </div>
      </div>
    </div>
  );
};

export default SeniorInfo;
