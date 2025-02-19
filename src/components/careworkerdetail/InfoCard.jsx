import { getOptions } from '../../util/get-options';
import { getKeyByValue } from '../../util/getKeyByValue';

const InfoCard = ({ regions, schedules, wage, wageType }) => {
  const weekdayOptions = getOptions('weekday');
  const wageTypeOptions = getOptions('wageType');

  return (
    <div>
      <p className="title">희망근무조건</p>
      <div className="row">
        <p className="subtitle">근무지</p>
        <div className="column">
          {regions.map((item, idx) => {
            return (
              <p key={idx}>
                {item.city} {item.district} {item.neighborhood}
              </p>
            );
          })}
        </div>
      </div>
      <div className="row">
        <p className="subtitle">근무시간</p>
        <div className="column">
          {schedules.map((item, idx) => {
            return (
              <p key={idx}>
                {getKeyByValue(weekdayOptions, item.day)} {item.startTime} ~{' '}
                {item.endTime}
              </p>
            );
          })}
        </div>
      </div>
      <div className="row">
        <p className="subtitle">급여</p>
        <p>
          {getKeyByValue(wageTypeOptions, wageType)} {wage}원
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
