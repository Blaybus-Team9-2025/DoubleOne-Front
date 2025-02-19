import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import Dropdown from '../registration/Dropdown';
import Required from '../_common/Required';
import AddInput from '../registration/AddInput';

import { CareworkerConditionsAtom } from '../../jotai/CareworkerInfo';
import { getDistrict, getNeighborhood } from '../../api/address';

const cities = ['서울특별시', '성남시', '부천시'];

const License = () => {
  const [input, setInput] = useAtom(CareworkerConditionsAtom);
  const [districts, setDistricts] = useState({});
  const [neighborhoods, setNeighborhoods] = useState({});
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
    const fetchDistricts = async () => {
      const newDistricts = {};
      for (const region of input.regionDtoList) {
        newDistricts[region.city] = await getDistrict(region.city);
      }
      setDistricts(newDistricts);
    };
    fetchDistricts();
  }, [input.regionDtoList.map((r) => r.city).join()]); // city 값이 변경될 때마다 호출

  // 구 선택 시 해당 동 목록 가져오기
  useEffect(() => {
    const fetchNeighborhoods = async () => {
      const newNeighborhoods = {};
      for (const region of input.regionDtoList) {
        newNeighborhoods[region.district] = await getNeighborhood(
          region.district
        );
      }
      setNeighborhoods(newNeighborhoods);
    };
    fetchNeighborhoods();
  }, [input.regionDtoList.map((r) => r.district).join()]); // district 값이 변경될 때마다 호출

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
              options={districts[region.city] || []}
              value={region.district}
              onChange={(val) => updateLocation(index, 'district', val)}
            />
            <Dropdown
              width="50%"
              options={neighborhoods[region.district] || []}
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
