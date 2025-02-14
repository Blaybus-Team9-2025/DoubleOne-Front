import React, { useState } from 'react';
import Header from '../components/SeniorRegister/Header'; // 헤더 추가
import Pinformation from "../components/SeniorRegister/Pinformation.jsx";
import InputField from '../components/SeniorRegister/InputField';
import GenderSelect from '../components/SeniorRegister/GenderSelect';
import BirthdaySelect from '../components/SeniorRegister/BirthdaySelect';
import LongTermCareSelect from '../components/SeniorRegister/LongTermCareSelect';
import DementiaSymptoms from '../components/SeniorRegister/DementiaSymptoms';
import DiseaseInput from '../components/SeniorRegister/DiseaseInput';
import PostalAddress from '../components/SeniorRegister/PostalAddress';
import CoLiving from '../components/SeniorRegister/CoLiving';
import SubmitButton from '../components/SeniorRegister/SubmitButton';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '남',
    birthYear: '2000',
    birthMonth: '1',
    birthDay: '1',
    careLevel: '등급없음',
    height: '',
    weight: '',
    dementiaSymptoms: [],
    address: '',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        minHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* 헤더 추가 */}
      <Header title="어르신 정보등록" />

      <div style={{ marginTop: '-50px' }} />

      {/* 여백 추가 (헤더가 fixed이므로) */}
      <div style={{ marginTop: '70px' }} />

      <Pinformation />

      {/* 이름 입력 */}
      <InputField label="이름" name="name" value={formData.name} setFormData={setFormData} required />

      {/* 성별 선택 */}
      <GenderSelect value={formData.gender} setFormData={setFormData} />

      {/* 생년월일 선택 */}
      <BirthdaySelect
        birthYear={formData.birthYear}
        birthMonth={formData.birthMonth}
        birthDay={formData.birthDay}
        setFormData={setFormData}
      />

      {/* 장기요양등급 선택 */}
      <LongTermCareSelect value={formData.careLevel} setFormData={setFormData} />

      {/* 키 입력 */}
      <InputField label="키" name="height" value={formData.height} setFormData={setFormData} required unit="cm" />

      {/* 몸무게 입력 */}
      <InputField label="몸무게" name="weight" value={formData.weight} setFormData={setFormData} required unit="kg" />

      {/* 치매 증상 선택 */}
      <DementiaSymptoms selected={formData.dementiaSymptoms} setFormData={setFormData} />

      {/* 질병 입력 */}
      <DiseaseInput />

      {/* 주소 입력 */}
      <PostalAddress value={formData.address} setFormData={setFormData} />

      {/* 동거 여부 */}
      <CoLiving />

      {/* 제출 버튼 */}
      <SubmitButton formData={formData} />

    </div>
  );
};

export default App;
