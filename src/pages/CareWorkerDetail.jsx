import styled from 'styled-components';
import Header from '../components/_common/Header';
import Profile from '../components/careworkerdetail/Profile';
import Slick from '../components/careworkerdetail/Slick';
import SquareButton from '../components/_common/SquareButton';

const mock = {
  worker_id: '1',
  name: '이요양',
  gender: 'M',
  phone_num: '010-1111-1111',
  has_trained: true,
  has_vechicle: true,
  address: '서울시 강남구 테헤란로',
  introduction: '책임감 있고 성실한 요양보호사입니다.',
  member_id: '1',
  worker_licenses: [
    {
      license_id: '2016-12345',
      license_type: '요양보호사',
    },
  ],
  worker_regions: [
    {
      region_id: '1',
      city: '서울시',
      district: '강남구',
      neighborhood: '테헤란로',
    },
    {
      region_id: '2',
      city: '서울시',
      district: '강남구',
      neighborhood: '영동대로',
    },
  ],
  worker_schedules: [
    {
      schedule_id: '1',
      day: '금',
      'start-date': '13:00',
      'end-date': '13:00',
    },
    {
      schedule_id: '2',
      day: '토',
      'start-date': '13:00',
      'end-date': '13:00',
    },
  ],
  wage: 100,

  workPeriods: [
    {
      title: '근무경험 제목',
      organization: '근무경험 조직',
      startDate: '2010-10-10',
      endDate: '2011-01-01',
      current: false,
    },
    {
      title: '근무경험 제목',
      organization: '근무경험 조직',
      startDate: '2006-10-10',
      endDate: '2007-01-01',
      current: false,
    },
    {
      title: '근무경험 제목',
      organization: '근무경험 조직',
      startDate: '2000-11-11',
      endDate: '2003-01-12',
      current: false,
    },
  ],
};

const CareWorkerDetail = () => {
  return (
    <Div>
      <Header title="요양보호사 정보" />
      <Profile
        profile={null}
        logo={null}
        name={mock.name}
        cert={mock.worker_licenses[0].license_type}
      />
      <Slick data={mock} />
      <SquareButton mb={35} color="green">
        근무 제안하기
      </SquareButton>
    </Div>
  );
};

const Div = styled.div`
  margin-top: 100px;
`;

export default CareWorkerDetail;
