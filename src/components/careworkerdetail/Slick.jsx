import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';

import InfoCard from './InfoCard';
import CareerCard from './CareerCard';
import IntroCard from './IntroCard';

const Slick = ({ data }) => {
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

  return (
    <Div>
      <Slider {...settings}>
        <ContentDiv>
          <Shadow>
            <Content>
              <InfoCard
                regions={data.workerRegions}
                schedules={data.workerSchedules}
                wage={data.wage}
                wageType={data.wageType}
              />
            </Content>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <Content>
              <CareerCard />
            </Content>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <Content>
              <IntroCard text={data.introduction} />
            </Content>
          </Shadow>
        </ContentDiv>
      </Slider>
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
  height: 300px;
  font-size: 16px;
  overflow: auto;
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
