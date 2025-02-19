import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import Dropdown from '../registration/Dropdown';
import Required from '../_common/Required';
import AddInput from '../registration/AddInput';

import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';

const cities = ['서울특별시', '성남시', '부천시'];
const districts = [
  {
    city: '서울특별시',
    districts: ['강남구', '종로구', '송파구'],
  },
  {
    city: '성남시',
    districts: ['분당구', '수정구', '중원구'],
  },
  {
    city: '부천시',
    districts: ['소사구', '오정구', '원미구'],
  },
];
const neighborhoods = [
  {
    district: '강남구',
    neighborhoods: ['역삼동', '삼성동', '논현동', '청담동'],
  },
  {
    district: '종로구',
    neighborhoods: ['경희궁동', '관훈동', '종로1가', '사직동'],
  },
  {
    district: '송파구',
    neighborhoods: ['잠실동', '가락동', '문정동', '신천동'],
  },
  {
    district: '분당구',
    neighborhoods: ['정자동', '야탑동', '수내동', '서현동'],
  },
  {
    district: '수정구',
    neighborhoods: ['신흥동', '상대원동', '단대동', '복정동'],
  },
  {
    district: '중원구',
    neighborhoods: ['여수동', '금광동', '상대원동', '하대동'],
  },
  {
    district: '소사구',
    neighborhoods: ['소사본동', '송내동', '심곡동', '고리울동'],
  },
  {
    district: '오정구',
    neighborhoods: ['내동', '대산동', '여월동', '삼정동'],
  },
  {
    district: '원미구',
    neighborhoods: ['중동', '상동', '하동', '산곡동'],
  },
];

const License = () => {
  const [input, setInput] = useAtom(CareworkerConditionsAtom);
  const [availableDistricts, setAvailableDistricts] = useState([]);
  const [availableNeighborhoods, setAvailableNeighborhoods] = useState([]);

  console.log(input);

  // 기본 근무 지역 초기화
  useEffect(() => {
    if (input.regionDtoList.length === 0) {
      setInput((prev) => ({
        ...prev,
        regionDtoList: [{ city: '', district: '', neighborhood: '' }],
      }));
    }
  }, [input.regionDtoList, setInput]);

  // 시 선택 시 해당 구 목록 가져오기
  useEffect(() => {
    const selectedCity =
      input.regionDtoList[input.regionDtoList.length - 1]?.city;
    const cityData = districts.find((item) => item.city === selectedCity);
    setAvailableDistricts(cityData ? cityData.districts : []);
  }, [input.regionDtoList]);

  // 구 선택 시 해당 동 목록 가져오기
  useEffect(() => {
    const selectedDistrict =
      input.regionDtoList[input.regionDtoList.length - 1]?.district;
    const districtData = neighborhoods.find(
      (item) => item.district === selectedDistrict
    );
    setAvailableNeighborhoods(districtData ? districtData.neighborhoods : []);
  }, [input.regionDtoList]);

  // 새로운 근무 지역 추가
  const addDropdown = () => {
    if (input.regionDtoList.length < 5) {
      setInput((prev) => ({
        ...prev,
        regionDtoList: [
          ...prev.regionDtoList,
          { city: '', district: '', neighborhood: '' },
        ],
      }));
    }
  };

  // 특정 지역 정보 업데이트
  const updateLocation = (index, field, value) => {
    setInput((prev) => ({
      ...prev,
      regionDtoList: prev.regionDtoList.map((region, i) =>
        i === index ? { ...region, [field]: value } : region
      ),
    }));
  };

  return (
    <Container>
      <div>
        <Label>희망 근무 지역</Label>
        <Required />
      </div>
      {input.regionDtoList.map((region, index) => (
        <Wrapper key={index}>
          <Dropdown
            width="100%"
            options={cities}
            value={region.city}
            onChange={(val) => updateLocation(index, 'city', val)}
          />
          <DropdownWrapper>
            <Dropdown
              width="50%"
              options={availableDistricts}
              value={region.district}
              onChange={(val) => updateLocation(index, 'district', val)}
            />
            <Dropdown
              width="50%"
              options={availableNeighborhoods}
              value={region.neighborhood}
              onChange={(val) => updateLocation(index, 'neighborhood', val)}
            />
          </DropdownWrapper>
        </Wrapper>
      ))}
      {input.regionDtoList.length < 5 && <AddInput onClick={addDropdown} />}
    </Container>
  );
};

export default License;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropdownWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
