import React from 'react';

const SubmitButton = ({ formData }) => {
  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
    alert('저장된 정보 : ㅁㅁㅁㅁㅁ');
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      저장된 정보 확인하기
    </button>
  );
};

export default SubmitButton;
