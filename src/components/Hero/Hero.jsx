import { HeroTitle, HeroWrap, ImageWrap, HeroSubTitle } from './Hero.styled';
// import mouseImg from '../../images/mousePng.png';

export const Hero = () => (
  <HeroWrap>
    <HeroTitle>Студія масажу Reveroff</HeroTitle>
    <HeroSubTitle>“Краса та здоровʼя доступні кожному”</HeroSubTitle>
    <ImageWrap>
      {/* <img src={mouseImg} alt="" width="20px" height="30px" />	 */}
      <p>Обирай себе ♡</p>
    </ImageWrap>
  </HeroWrap>
);
