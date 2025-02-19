import { atom } from 'jotai';

// BEFORE_REQUEST 대기
// WAITING 응답 대기
// PENDING 조율 요청
// ACCEPTED 수락
// REJECTED 거절
// 매칭 상태 목록 조회 저장 atom
export const MatchingList = atom({
  seniorMatchingList: [
    {
      seniorId: 2,
      name: '어르신2',
      address: 'Seoul',
      profileImg: null,
      age: 75,
      workerMatchingList: [
        {
          workerConditionId: 1,
          name: '하영',
          address: '서울특별시 성북구 동소문로17길 8 (동소문동6가)',
          profileImg: null,
          workPeriods: [
            {
              title: '근무경험 제목',
              organization: '근무경험 조직',
              startDate: '2010-10-10',
              endDate: '2011-01-01',
              current: false,
            },
          ],
        },
      ],
    },
  ],
});
