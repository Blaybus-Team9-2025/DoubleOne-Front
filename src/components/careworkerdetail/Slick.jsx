import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Slick = () => {
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
            <div>
              <p>희망근무조건</p>
            </div>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <div>
              <p>경력사항</p>
            </div>
          </Shadow>
        </ContentDiv>
        <ContentDiv>
          <Shadow>
            <div>
              <p>자기소개</p>
            </div>
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
  height: 310px;
`;

const Shadow = styled.div`
  width: 100%;
  height: 305px;
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 25px;
  div {
    height: 230px;
  }
`;

export default Slick;
