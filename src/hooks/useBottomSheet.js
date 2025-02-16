import { useEffect, useRef, useState } from 'react';
import { MIN_Y } from '../components/chat/BottomSheet/BottomSheetOption';

const useBottomSheet = () => {
  const defaultMetrics = {
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
  };

  const sheet = useRef(null);
  const content = useRef(null);
  const metrics = useRef(defaultMetrics);

  const initialMiddleY = window.innerHeight / 2;
  const middleStopY = window.innerHeight / 2;
  const [currentY, setCurrentY] = useState(initialMiddleY);

  useEffect(() => {
    const handleResize = () => {
      setCurrentY(window.innerHeight / 2);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;

      if (!isContentAreaTouched) {
        return true;
      }

      if (sheet.current.getBoundingClientRect().y !== MIN_Y) {
        return true;
      }

      if (touchMove.movingDirection === 'down') {
        return content.current.scrollTop <= 0;
      }

      return false;
    };

    const handleTouchStart = (e) => {
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];

      touchMove.prevTouchY ||= touchStart.touchY;
      touchMove.movingDirection =
        touchMove.prevTouchY < currentTouch.clientY ? 'down' : 'up';

      if (canUserMoveBottomSheet(e)) {
        e.preventDefault();

        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y; // 최대 위치
        } else if (nextSheetY >= window.innerHeight) {
          nextSheetY = window.innerHeight; // 완전 사라짐 -> 채팅 종료 로직 추가 *
        }

        setCurrentY(nextSheetY);
        sheet.current.style.setProperty(
          'transform',
          `translateY(${nextSheetY - window.innerHeight}px)`
        );
      } else {
        document.body.style.overflowY = 'hidden';
      }
    };

    const handleTouchEnd = () => {
      document.body.style.overflowY = 'auto';
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current.getBoundingClientRect().y;

      let finalY;
      if (currentSheetY !== MIN_Y) {
        if (touchMove.movingDirection === 'down') {
          if (currentSheetY > middleStopY) {
            finalY = window.innerHeight; // 완전 내리면 사라짐
          } else {
            finalY = middleStopY; // 중간에서 멈춤
          }
        } else if (touchMove.movingDirection === 'up') {
          if (currentSheetY < (middleStopY + MIN_Y) / 2) {
            finalY = MIN_Y; // 최대로 올림
          } else {
            finalY = middleStopY; // 중간에서 멈춤
          }
        }

        setCurrentY(finalY);
        sheet.current.style.transform = `translateY(${
          finalY - window.innerHeight
        }px)`;
      }

      metrics.current = defaultMetrics;
    };

    if (sheet.current) {
      sheet.current.addEventListener('touchstart', handleTouchStart);
      sheet.current.addEventListener('touchmove', handleTouchMove);
      sheet.current.addEventListener('touchend', handleTouchEnd);
    }
  }, []);

  useEffect(() => {
    const setTouchStart = () => {
      metrics.current.isContentAreaTouched = true;
    };

    if (content.current) {
      content.current.addEventListener('touchstart', setTouchStart);
    }
  }, []);

  return { sheet, content, currentY };
};

export default useBottomSheet;
