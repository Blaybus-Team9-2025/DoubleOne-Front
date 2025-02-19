import styled from 'styled-components';
import ContactItem from './ContactItem';
import { calculateTotalExperience } from '../../util/calculateDate';

const ContactList = ({ seniorId, data }) => {
  return (
    <ListDiv>
      <Title>요양보호사를 선택해주세요</Title>
      <ItemWrapper>
        {data.length > 0 ? (
          data.map((item, idx) => {
            const filteredDateList = item.workPeriods?.map(
              ({ startDate, endDate }) => ({
                startDate: startDate,
                endDate: endDate,
              })
            );
            const totalMonths = calculateTotalExperience(filteredDateList);
            const years = Math.floor(totalMonths / 12);
            const months = totalMonths % 12;
            const desc = `총 경력 ${years}년 ${months}개월`;
            const addr = `${item.workerRegions[0].city} ${item.workerRegions[0].district} ${item.workerRegions[0].neighborhood}`;

            return (
              <ContactItem
                key={idx}
                isChatting={item.requestMatching}
                name={item.workerName}
                seniorId={seniorId}
                workerId={item.workerId}
                workerConditionId={item.workerConditionId}
                desc={desc}
                addr={addr}
                workPeriods={item.workPeriods}
              />
            );
          })
        ) : (
          <Alarm>아직 매칭된 요양보호사가 없어요</Alarm>
        )}
      </ItemWrapper>
    </ListDiv>
  );
};

const ListDiv = styled.div`
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Alarm = styled.p`
  width: 100%;
  font-size: 16px;
  color: gray;
  text-align: center;
  margin: 20px 0;
`;

export default ContactList;
