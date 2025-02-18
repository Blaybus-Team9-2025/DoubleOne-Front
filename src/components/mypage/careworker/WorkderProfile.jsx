import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WorkerProfile = () => {
  const nav = useNavigate();

  return (
    <Div>
      <ImgDiv>
        <img />
      </ImgDiv>
      <NameDiv>
        <div className="name">
          <p>김얼리</p>
          <p>요양보호사님</p>
        </div>
        <button onClick={() => nav(`/editcareworkerinfo/${1}`)}>
          개인정보 수정하기
        </button>
      </NameDiv>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImgDiv = styled.div`
  width: 92px;
  height: 92px;
  background-color: #d3d3d3;
  border-radius: 15px;
  flex-shrink: 0;
  box-shadow: var(--shadow);
  img {
    width: 100%;
    object-fit: cover;
    border: none;
  }
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  .name {
    display: flex;
    align-items: end;
    font-weight: 700;
    gap: 5px;
    p:first-child {
      font-size: 32px;
    }
    p:last-child {
      font-size: 18px;
    }
  }

  button {
    width: fit-content;
    font-size: 16px;
    padding: 2px 14px;
    border-radius: 20px;
    background-color: #e5e5e5;
  }
`;

export default WorkerProfile;
