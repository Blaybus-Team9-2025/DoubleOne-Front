// Input 태그 text 입력창 공통 스타일
export const InputStyle = `
  height: 40px;
  border: 1px solid var(--grey);
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
`;

import check from '../assets/checkbox.png';

// 체크박스 공통 스타일
export const CheckboxStyle = `
  appearance: none; // 기본 체크박스 스타일 제거
  margin-right: 8px;
  cursor: pointer;

  // 체크가 안돼 있을 때
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--grey);

  // 체크돼 있을 때
  &:checked {
    background-image: url(${check});
    background-size: 90% 90%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export const LabelStyle = `
  font-size:16px;
  margin-bottom:8px;
  user-select:none
`;
