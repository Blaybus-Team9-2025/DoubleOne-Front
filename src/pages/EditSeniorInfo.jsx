import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../components/_common/Header';
import Title from '../components/_common/Title';
import Modal from '../components/_common/Modal';
import RoundButton from '../components/_common/RoundButton';
import ImgUpload from '../components/registration/ImgUpload';
import AddressInput from '../components/registration/AddressInput';
import CaringGrade from '../components/seniorinfo/CaringGrade';
import Height from '../components/seniorinfo/Height';
import Weight from '../components/seniorinfo/Weight';
import Dementia from '../components/seniorinfo/Dementia';
import EtcDisease from '../components/seniorinfo/EtcDisease';
import Cohabitation from '../components/seniorinfo/Cohabitation';
import { useAtom, useAtomValue } from 'jotai';
import { IdAtom } from '../jotai/Id';
import { getSeniorDetail, patchSenior } from '../api/senior';
import NameAndGender from '../components/registration/NameAndGender';
import { SeniorInfoAtom } from '../jotai/SeniorInfo';
import { LoginAtom } from '../jotai/Login';
import BirthDate from '../components/registration/BirthDate';

const EditSeniorInfo = () => {
  const ModalInfo1 = {
    type: 'confirm',
    text: `${atom.name} 어르신 정보를 삭제하시겠습니까?`,
    btnText1: '아니오',
    btnText2: '예',
  };

  const ModalInfo2 = {
    type: 'alert',
    text: '삭제가 완료되었습니다',
    btnText1: '확인',
  };

  const { managerId } = useAtomValue(LoginAtom);
  const { id } = useAtomValue(IdAtom);
  const [atom, setAtom] = useAtom(SeniorInfoAtom);

  useEffect(() => {
    const getData = async () => {
      const res = await getSeniorDetail(id);
      setAtom({ ...res?.data, managerId: managerId });
      setDementiaSymptoms(atom.dementiaSymptoms);

      console.log(res.data);
    };

    // getData();
  }, [id]);

  const [error, setError] = useState(
    Object.keys(atom).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );

  const validate = () => {
    const newErrors = {};

    Object.entries(atom).forEach(([key, val]) => {
      if (key !== 'height' && key !== 'etcDisease' && !val) {
        newErrors[key] = true; // 값이 비어있으면 오류로 설정
      }
      if (key === 'dementiaSymptoms' && val.length <= 0) {
        newErrors[key] = true;
      }
    });
    setError(newErrors); // 한 번에 setError 실행

    return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
  };

  const [dementiaSymptoms, setDementiaSymptoms] = useState([]);
  const [imgFile, setImgFile] = useState(null);

  const nav = useNavigate();
  // 저장하기 버튼 클릭
  const onSave = async () => {
    const patchData = {
      managerId: atom.managerId,
      name: atom.name,
      gender: atom.gender,
      birthDate: atom.birthDate,
      careLevel: atom.careLevel,
      height: atom.height,
      weight: atom.weight,
      address: atom.address,
      cohabitationStatus: atom.cohabitationStatus,
      dementiaSymptoms: atom.dementiaSymptoms,
      etcDisease: atom.etcDisease,
    };
    if (imgFile) {
      const res = await patchSenior(id, patchData, imgFile);
    } else {
      const res = await patchSenior(id, patchData, atom.imgFile);
    }
  };

  // 삭제하기 문구 눌렀을 때
  const onClickDeactivate = () => {
    setModal1Yn(true);
  };

  // 삭제하기 모달에서 '예' 눌렀을 때
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
      <Header title="어르신 정보 수정하기" />
      <Wrapper>
        <Title>
          <p>{atom.name} 어르신</p>
        </Title>
        <ImgUpload edit setEditedImg={setImgFile} url={atom.profileImg} />
        <NameAndGender type={'info'} target={'senior'} error={error.name} />
        <BirthDate type={'info'} target={'senior'} error={error.birthDate} />
        <CaringGrade
          setCaringGrade={(input) =>
            setAtom((prev) => ({ ...prev, careLevel: input }))
          }
          error={error.careLevel}
          data={atom.careLevel}
        />
        <Height
          setHeight={(input) => setAtom((prev) => ({ ...prev, height: input }))}
          data={atom.height}
        />
        <Weight
          setWeight={(input) => setAtom((prev) => ({ ...prev, weight: input }))}
          error={error.weight}
          data={atom.weight}
        />
        <Dementia
          dementia={dementiaSymptoms}
          setDementia={setDementiaSymptoms}
          error={error.dementiaSymptoms}
        />
        <EtcDisease
          setEtcDisease={(input) =>
            setAtom((prev) => ({ ...prev, etcDisease: input }))
          }
          data={atom.etcDisease}
        />
        <AddressInput type={'info'} target={'senior'} error={error.address} />
        <Cohabitation
          setCohabitation={(input) =>
            setAtom((prev) => ({ ...prev, cohabitationStatus: input }))
          }
          error={error.cohabitationStatus}
          data={atom.cohabitationStatus}
        />
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
