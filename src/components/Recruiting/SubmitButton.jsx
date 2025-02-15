import React from 'react';

const SubmitButtons = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',  // 가로 중앙 정렬
    alignItems: 'center',      // 세로 중앙 정렬
    flexDirection: 'column',   // 버튼들이 세로로 쌓이게
    height: '10vh',           // 전체 화면 높이
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    selfStretch: 'stretch',
    backgroundColor: '#C1E678',
    textAlign: 'left',
    paddingTop: '14px',
    paddingBottom: '14px',
    marginLeft: '18px',
    marginRight: '18px',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0px 4px 4px #00000040',
    marginBottom: '15px',
    width: '80%',
  };

  const textStyle = {
    color: '#191919',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={() => alert('Pressed!')}
      >
        <span style={textStyle}>
          어르신 정보 저장하기
        </span>
      </button>

      <button
        style={buttonStyle}
        onClick={() => alert('Pressed!')}
      >
        <span style={textStyle}>
          저장하고 다음으로
        </span>
      </button>
    </div>
  );
};

export default SubmitButtons;
