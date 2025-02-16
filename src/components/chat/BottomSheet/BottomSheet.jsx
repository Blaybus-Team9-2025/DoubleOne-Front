import styled from 'styled-components';
import Header from './Header';
import Content from './Content';
import useBottomSheet from '../../../hooks/useBottomSheet';
import { BOTTOM_SHEET_HEIGHT } from './BottomSheetOption';
import { useEffect, useState } from 'react';

const BottomSheet = () => {
  const { sheet, content, currentY } = useBottomSheet();
  const [position, setPosition] = useState('translateY(-50%)');

  useEffect(() => {
    if (currentY === window.innerHeight) {
      setPosition(`translateY(${window.innerHeight}px)`); // 완전히 화면 아래로
    } else {
      setPosition(`translateY(${currentY - window.innerHeight}px)`); // 드래그 이동 반영
    }
  }, [currentY]);

  return (
    <Div ref={sheet} style={{ transform: position }}>
      <Header />
      <BottomSheetContent ref={content}>
        <Content />
      </BottomSheetContent>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 1;
  top: 100%;
  left: 0;
  right: 0;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top: 1px solid #000000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: transform 650ms ease-out;
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export default BottomSheet;
