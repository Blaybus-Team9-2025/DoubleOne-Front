import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import ScheduleList from './ScheduleList';

import plus from '../../assets/plus-nocircle.png';

const CalendarMain = ({ home }) => {
  const [date, setDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  // 연도 목록 (현재 연도를 기준으로 +- 10년)
  const years = Array.from(
    { length: 21 },
    (_, i) => new Date().getFullYear() - 10 + i
  );
  // 월 목록 (1월~12월)
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value, 10);
    const newDate = new Date(newYear, activeStartDate.getMonth(), 1);
    setActiveStartDate(newDate);
  };

  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    const newDate = new Date(activeStartDate.getFullYear(), newMonth, 1);
    setActiveStartDate(newDate);
  };

  return (
    <Div>
      <Calendar
        onChange={setDate}
        activeStartDate={activeStartDate}
        value={date}
        locale="en-US"
        showNeighboringMonth={false}
        formatMonthYear={(locale, date) =>
          `${date.getFullYear()}년 ${date.getMonth() + 1}월`
        }
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        formatShortWeekday={(locale, date) =>
          ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
        }
        navigationLabel={({ date }) => (
          <NavWrapper onClick={(e) => e.stopPropagation()}>
            <Select
              className="month"
              value={date.getMonth()}
              onChange={handleMonthChange}
            >
              {months.map((month) => (
                <option key={month} value={month - 1}>
                  {month}월
                </option>
              ))}
            </Select>
            <Select value={date.getFullYear()} onChange={handleYearChange}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </NavWrapper>
        )}
        next2Label={null}
        prev2Label={null}
        nextLabel={null}
        prevLabel={null}
        onClickMonthYear={(e) => e.stopPropagation()}
      />
      {!home && <ScheduleList date={date.toString()} />}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #ffffff;
  }
  abbr {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    color: #000000;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }
  .react-calendar__navigation__label,
  .react-calendar__navigation {
    height: max-content;
  }
  .react-calendar__tile--now {
    background-color: #ffffff;
    &:hover {
      background-color: var(--blue);
    }
  }
  .react-calendar__tile--active {
    background-color: #ffffff;
    abbr {
      background-color: var(--blue);
      box-shadow: var(--shadow);
    }
    &.react-calendar__month-view__days__day--weekend abbr {
      color: #000000;
    }
    &.react-calendar__tile--now abbr {
      color: #ffffff;
    }
  }
  .react-calendar__tile,
  .react-calendar__month-view__weekdays__weekday {
    width: 100%;
    max-width: unset;
    height: 50px !important;
    flex: 1;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__tile:focus {
    background-color: #ffffff;
  }
  .react-calendar__tile:hover {
    background-color: #ffffff;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Select = styled.select`
  width: fit-content;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  &.month {
    display: flex;
    justify-content: end;
    font-size: 32px;
    z-index: 1000;
    option {
      font-size: 16px;
    }
  }
`;

// 일정 추가하기 버튼 css
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 18px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 30px;
    font-size: 14px;
    padding: 2px 13px;
    border-radius: 20px;
    background-color: #e2e2e2;
    cursor: pointer;
  }
  img {
    width: 14px;
    height: 14px;
  }
`;

export default CalendarMain;
