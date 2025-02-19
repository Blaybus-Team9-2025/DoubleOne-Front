import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import Modal from '../components/_common/Modal';
import RoundButton from '../components/_common/RoundButton';
import ImgUpload from '../components/registration/ImgUpload';
import CaringGrade from '../components/seniorinfo/CaringGrade';
import EtcDisease from '../components/seniorinfo/EtcDisease';
import { useAtom, useAtomValue } from 'jotai';
import { deleteSenior, getSeniorDetail, patchSenior } from '../api/senior';
import { SeniorInfoAtom } from '../jotai/SeniorInfo';
import { LoginAtom } from '../jotai/Login';
import { translateDate } from '../util/calculateDate';
import { getKeyByValue } from '../util/getKeyByValue';
import { getOptions } from '../util/get-options';
import { InputStyle, LabelStyle } from '../util/common-style';

const EditSeniorInfo = () => {
  const ModalInfo1 = {
    type: 'confirm',
    text: `어르신 정보를 삭제하시겠습니까?`,
    btnText1: '아니오',
    btnText2: '예',
  };

  const ModalInfo2 = {
    type: 'alert',
    text: '삭제가 완료되었습니다',
    btnText1: '확인',
  };

  const { managerId } = useAtomValue(LoginAtom);
  const { id } = useParams();
  const [atom, setAtom] = useAtom(SeniorInfoAtom);

  useEffect(() => {
    // 어르신 정보 가져오기
    const getData = async () => {
      const res = await getSeniorDetail(id);
      setAtom({ ...res?.data, managerId: managerId });
      console.log(res.data);
    };

    getData();
  }, [id, managerId]);

  // 빈 필드 검증
  const [error, setError] = useState(
    Object.keys(atom).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const validate = (patchData) => {
    const newErrors = {};

    Object.entries(patchData).forEach(([key, val]) => {
      if (key !== 'etcDisease' && !val) {
        newErrors[key] = true; // 값이 비어있으면 오류로 설정
      }
    });
    setError(newErrors); // 한 번에 setError 실행

    return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
  };

  const [imgFile, setImgFile] = useState(null);

  const coHabitationOptions = getOptions('cohabitation');

  const nav = useNavigate();
  // 저장하기 버튼 클릭
  const onSave = async () => {
    const patchData = {
      seniorId: atom.seniorId,
      careLevel: atom.careLevel,
      address: atom.address,
      etcDisease: atom.etcDisease,
    };

    if (!validate(patchData)) {
      alert('입력값을 확인해주세요');
      return;
    }

    let res;

    if (imgFile) {
      res = await patchSenior(id, patchData, imgFile);
    } else {
      res = await patchSenior(id, patchData, atom?.imgFile);
    }

    // 성공 시
  };

  // 삭제하기 문구 눌렀을 때
  const onClickDeactivate = () => {
    setModal1Yn(true);
  };

  // 삭제하기 모달에서 '예' 눌렀을 때
  const onDeactivate = async () => {
    setModal2Yn(true);
    const res = await deleteSenior(id);
    console.log(res);
    if (res.status === 204) {
      nav(-1);
      setModal2Yn(true);
    } else {
      setModal2Yn(true);
      alert('삭제를 실패했습니다.');
    }
  };

  const [modal1Yn, setModal1Yn] = useState(false);
  const [modal2Yn, setModal2Yn] = useState(false);

  const onClose = () => {
    setModal1Yn(false);
    setModal2Yn(false);
  };

  return (
    <Container>
      <Header title="어르신 정보 수정하기" />
      <Wrapper>
        <Title>
          <p>{atom?.name} 어르신</p>
        </Title>
        <ImgUpload edit setEditedImg={setImgFile} url={atom?.profileImg} />
        <Div>
          <FixedWrapper>
            <Key>이름</Key>
            <Val>{atom?.name}</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>{atom?.gender === 'M' ? '남' : '여'}성</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>{translateDate(atom?.birthDate)}</Val>
        </FixedWrapper>
        <CaringGrade
          setCaringGrade={(input) =>
            setAtom((prev) => ({ ...prev, careLevel: input }))
          }
          error={error.careLevel}
          data={atom?.careLevel}
        />
        <FixedWrapper>
          <Key>어르신 키</Key>
          <Val>{atom.height}cm</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>어르신 몸무게</Key>
          <Val>{atom.weight}kg</Val>
        </FixedWrapper>
        <div>
          <Key>치매 증상</Key>
          {atom?.dementiaSymptoms.map((val, idx) => {
            return <Val key={idx}>{val}</Val>;
          })}
        </div>
        <EtcDisease
          setEtcDisease={(input) =>
            setAtom((prev) => ({ ...prev, etcDisease: input }))
          }
          data={atom?.etcDisease}
        />
        <Address>
          <Label htmlFor="address">주소</Label>
          <Input
            className={`address ${error.address && 'error'}`}
            type="text"
            value={atom.address}
            name="address"
            onChange={(e) =>
              setAtom((prev) => ({ ...prev, address: e.target.value }))
            }
          />
        </Address>
        <FixedWrapper>
          <Key>동거인 여부</Key>
          <Val>
            {getKeyByValue(coHabitationOptions, atom?.cohabitationStatus)}
          </Val>
        </FixedWrapper>
      </Wrapper>
      <ButtonWrapper>
        <RoundButton text="취소" mt="40" onClick={() => nav(-1)} />
        <RoundButton text="저장하기" color="green" onClick={onSave} />
        <p onClick={onClickDeactivate}>어르신 정보 삭제하기</p>
      </ButtonWrapper>
      <Modal
        isOpen={modal1Yn}
        onClose={onClose}
        onClick1={onClose}
        onClick2={onDeactivate}
        {...ModalInfo1}
      />
      <Modal isOpen={modal2Yn} onClose={onClose} {...ModalInfo2} />
    </Container>
  );
};

export default EditSeniorInfo;

const Container = styled.div`
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FixedWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Key = styled.p`
  font-size: 16px;
  margin-right: 30px;
`;

const Val = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    text-decoration: underline;
    margin-bottom: 30px;
    cursor: pointer;
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  ${LabelStyle}
`;

const Input = styled.input`
  ${InputStyle}

  .error {
    border-color: var(--red);
  }
`;
