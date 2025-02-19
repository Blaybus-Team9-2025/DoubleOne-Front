import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAtom } from 'jotai';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import Modal from '../components/_common/Modal';
import RoundButton from '../components/_common/RoundButton';
import ImgUpload from '../components/registration/ImgUpload';
import PhoneNum from '../components/registration/PhoneNum';
import AddressInput from '../components/registration/AddressInput';
import Password from '../components/signup/Password';
import { CareWorkerInfoAtom } from '../jotai/CareworkerInfo';
import { editWorkerInfo } from '../api/worker';

const ModalInfo1 = {
  type: 'confirm',
  text: '정말 탈퇴하시겠습니까?',
  btnText1: '아니오',
  btnText2: '예',
};

const ModalInfo2 = {
  type: 'alert',
  text: '탈퇴가 완료되었습니다',
  btnText1: '확인',
};

const EditCareWorkerInfo = () => {
  const nav = useNavigate();
  const onSave = async () => {
    const patchData = {
      seniorId: atom.seniorId,
      careLevel: atom.careLevel,
      address: atom.address,
      etcDisease: atom.etcDisease,
    };

    //  if (!validate(patchData)) {
    //    alert('입력값을 확인해주세요');
    //    return;
    //  }

    //  let res;

    //  if (imgFile) {
    //    res = await editWorkerInfo(id, patchData, imgFile);
    //  } else {
    //    res = await editWorkerInfo(id, patchData, atom?.imgFile);
    //  }

    // 성공 시
  };

  const [imgFile, setImgFile] = useState(null);
  const [atom, setAtom] = useAtom(CareWorkerInfoAtom);

  // 탈퇴하기 문구 눌렀을 때
  const onClickDeactivate = () => {
    setModal1Yn(true);
  };

  // 탈퇴하기 모달에서 '예' 눌렀을 때
  const onDeactivate = () => {
    setModal2Yn(true);
  };

  const [modal1Yn, setModal1Yn] = useState(false);
  const [modal2Yn, setModal2Yn] = useState(false);

  const onClose = () => {
    setModal1Yn(false);
    setModal2Yn(false);
  };

  return (
    <Container>
      <Header title="온림 溫林" />
      <Wrapper>
        <Title>
          <p>ㅇㅇㅇ 요양보호사님</p>
        </Title>
        <ImgUpload edit setEditedImg={setImgFile} url={imgFile} />
        <Div>
          <FixedWrapper>
            <Key>이름</Key>
            <Val>000</Val>
          </FixedWrapper>
          <FixedWrapper>
            <Key>성별</Key>
            <Val>여성</Val>
          </FixedWrapper>
        </Div>
        <FixedWrapper>
          <Key>아이디(이메일)</Key>
          <Val>abc@gmail.com</Val>
        </FixedWrapper>
        <FixedWrapper>
          <Key>생년월일</Key>
          <Val>1973년 3월 22일</Val>
        </FixedWrapper>
        <PhoneNum type="edit" target="worker" />
        <AddressInput type="edit" target="worker" />
        <Password type="edit" target="worker" />
      </Wrapper>
      <ButtonWrapper>
        <RoundButton text="취소" mt="40" onClick={() => nav(-1)} />
        <RoundButton text="저장하기" color="green" onClick={onSave} />
        <p onClick={onClickDeactivate}>회원 탈퇴하기</p>
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

export default EditCareWorkerInfo;

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
