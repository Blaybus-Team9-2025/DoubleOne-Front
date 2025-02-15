import React from 'react';

const symptoms = [
  "정상(치매증상 없음)", "했던 말을 반복", "길을 잃음", 
  "어린아이 같은 행동", "집 밖을 배회", "가족을 못 알아봄", 
  "망상", "공격적 행동"
];

const DementiaSymptoms = ({ selected, setFormData }) => {
  const toggleSelection = (symptom) => {
    setFormData(prev => ({
      ...prev,
      dementiaSymptoms: prev.dementiaSymptoms.includes(symptom)
        ? prev.dementiaSymptoms.filter(s => s !== symptom)
        : [...prev.dementiaSymptoms, symptom]
    }));
  };

  return (
    <div style={{ marginTop: '20px' , marginLeft: '20px' }}>
      <label>치매 증상 <span style={{ color: 'red' }}>*</span> (복수 선택 가능)</label>
      {symptoms.map(symptom => (
        <div key={symptom} onClick={() => toggleSelection(symptom)} style={{ marginBottom: '8px' }}>
          <input 
            type="checkbox" 
            checked={selected.includes(symptom)} 
            readOnly 
            style={{ marginRight: '4px' }} 
          />
          {symptom}
        </div>
      ))}
    </div>
  );
};

export default DementiaSymptoms;
