import Container from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import HomePageWrap from './HomePage.styles';
import { Hero } from 'components/Hero/Hero';

export const HomePage = () => {
  return (
    <HomePageWrap>
      <Container>
        <Header></Header>
        <Hero></Hero>
      </Container>
    </HomePageWrap>
  );
};
