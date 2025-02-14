import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import InfoCard from './InfoCard';
import CareerCard from './CareerCard';
import IntroCard from './IntroCard';
import DetailModal from './DetailModal';

const Slick = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const modalList = [
    <InfoCard key="1" modal="modal" />,
    <CareerCard key="2" modal="modal" />,
    <IntroCard key="3" modal="modal" />,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '25px' }}>
        <ul>{dots}</ul>
      </div>
    ),
  };

  const handleClick = (index) => {
    setModalIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <Div>
      <Slider {...settings}>
        <ContentDiv>
          <Shadow>
            <Content onClick={() => handleClick(0)}>
              <InfoCard />
            </Content>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <Content onClick={() => handleClick(1)}>
              <CareerCard />
            </Content>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <Content onClick={() => handleClick(2)}>
              <IntroCard />
            </Content>
          </Shadow>
        </ContentDiv>
      </Slider>
      {isOpen && (
        <DetailModal isOpen={isOpen} setIsOpen={setIsOpen}>
          {<Content className="modal">{modalList[modalIndex]}</Content>}
        </DetailModal>
      )}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 24px;
  overflow: hidden;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 380px;
`;

const Shadow = styled.div`
  width: 100%;
  height: 370px;
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 25px;
`;

const Content = styled.div`
  &:not(.modal) {
    height: 300px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
  }
  word-break: keep-all;
  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .subtitle {
    width: 100px;
    font-weight: 700;
  }
  .row {
    display: flex;
    margin-bottom: 10px;
    &.career-item {
      justify-content: space-between;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    p:first-child {
      margin-bottom: 5px;
    }
  }

  .career {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 20px;
    font-weight: 700;
    .title {
      margin-bottom: 0;
    }
  }
  .role {
    display: flex;
    justify-content: end;
  }

  .introduction {
    word-break: break-all;
  }
`;

export default Slick;
