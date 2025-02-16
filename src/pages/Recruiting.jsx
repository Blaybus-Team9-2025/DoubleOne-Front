import React, { useState } from 'react';
import Header from '../components/_common/Header.jsx'; // 헤더 추가
import InputField from '../components/Recruiting/InputField';
import GenderSelect from '../components/Recruiting/GenderSelect';
import BirthdaySelect from '../components/Recruiting/BirthdaySelect';
import LongTermCareSelect from '../components/Recruiting/LongTermCareSelect';
import DementiaSymptoms from '../components/Recruiting/DementiaSymptoms';
import DiseaseInput from '../components/Recruiting/DiseaseInput';
import PostalAddress from '../components/Recruiting/PostalAddress';
import CoLiving from '../components/Recruiting/CoLiving';
import SubmitButton from '../components/Recruiting/SubmitButton';
import Pinformation from '../components/Recruiting/Pinformation';
import SeniorInfo from '../components/Recruiting/SeniorInfo'; 
import GenderSelect2 from '../components/Recruiting/GenderSelect2';

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
    photo: null, // photo 추가
  });

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      <Header title={<span style={{ fontSize: '16px' }}>구인정보 등록</span>} />

      <div style={{ marginTop: '-50px',  width:'126px' , height:'25px' }} />

      {/* 여백 추가 (헤더가 fixed이므로) */}
      <div style={{ marginTop: '70px' }} />

      <SeniorInfo formData={formData} setFormData={setFormData} />

      <Pinformation />

      {/* 이름 입력 */}
      <div style={{ marginTop: '50px' }}>  {/* 이름 필드만 감싸는 div 추가 */}
  <InputField 
    label="이름" 
    name="name" 
    value={formData.name} 
    setFormData={setFormData} 
    required 
    placeholder="이름을 입력해주세요" 
    width="380px"
    height="45px" 
  />
</div>


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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>
  <InputField 
    label="어르신 키" 
    name="height" 
    value={formData.height} 
    setFormData={setFormData} 
    required 
    unit="cm" 
    width="136px" 
    height="45px" 
  />

  <InputField 
    label="어르신 몸무게" 
    name="weight" 
    value={formData.weight} 
    setFormData={setFormData} 
    required 
    unit="kg" 
    width="136px" 
    height="45px" 
  />
</div>




      {/* 치매 증상 선택 */}
      <DementiaSymptoms selected={formData.dementiaSymptoms} setFormData={setFormData} />

      {/* 질병 입력 */}
      <DiseaseInput />

      <GenderSelect2/>

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
