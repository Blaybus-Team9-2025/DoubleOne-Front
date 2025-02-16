import { calculateTotalExperience, sliceDate } from '../../util/calculateDate';

const CareerCard = ({ experiences }) => {
  const filteredDateList = experiences.map(({ startDate, endDate }) => ({
    startDate: startDate,
    endDate: endDate,
  }));

  const totalMonths = calculateTotalExperience(filteredDateList);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <div>
      <div className="career">
        <p className="title">경력사항</p>
        <p>
          {years > 0 && <span>{years}년</span>}
          {months > 0 && <span> {months}개월</span>}
        </p>
      </div>
      {experiences.map((item, index) => {
        return (
          <div key={index} className="row career-item">
            <p className="subtitle">{item.organization}</p>
            <div>
              <p>
                {sliceDate(item.startDate)} ~ {sliceDate(item.endDate)}
              </p>
              <div className="role">
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CareerCard;
