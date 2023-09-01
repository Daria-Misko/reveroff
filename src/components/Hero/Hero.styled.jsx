import { styled } from 'styled-components';

const HeroWrap = styled.div`
  padding: 200px 0 30px;
`;

const HeroTitle = styled.p`
  font-size: 72px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;

  /* &:last-child {
    margin-bottom: 0;
    font-size: 18px;
    font-style: italic;
    font-weight: 200;
  } */
`;

const HeroSubTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-style: italic;
  font-weight: 100;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 200px;
`;

const ImageWrap = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;
`;

export { HeroWrap, HeroTitle, ImageWrap, HeroSubTitle };
