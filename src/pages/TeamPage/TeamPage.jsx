import Container from 'components/Container/Container';
import {
  PhotoWrap,
  TeamCard,
  TeamList,
  // TeamName,
  TeamPhoto,
  Title,
  TeamPageContainer,
  PhotoBorder,
  TeamListSecond,
  Team,
} from './TeamPage.styles';
import DimaPhoto from '../../images/team/Dima2.jpeg';
import AlenaPhoto from '../../images/team/Alena.jpg';
import RuslanaPhoto from '../../images/team/Ruslana2.jpeg';
import IhorPhoto from '../../images/team/Ihor2.jpeg';

export const TeamPage = () => {
  return (
    <TeamPageContainer>
      <Container>
        <Title>Наші майстри</Title>
        <Team>
          <TeamList>
            <TeamCard>
              <PhotoBorder>
                <PhotoWrap>
                  <TeamPhoto src={DimaPhoto} alt="" />
                </PhotoWrap>
              </PhotoBorder>
              {/* <TeamName>Дмитро</TeamName> */}
            </TeamCard>
            <TeamCard>
              <PhotoBorder>
                <PhotoWrap>
                  <TeamPhoto src={AlenaPhoto} alt="" />
                </PhotoWrap>
              </PhotoBorder>
              {/* <TeamName>Альна</TeamName> */}
            </TeamCard>
          </TeamList>
          <TeamListSecond>
            <TeamCard>
              <PhotoBorder>
                <PhotoWrap>
                  <TeamPhoto src={RuslanaPhoto} alt="" />
                </PhotoWrap>
              </PhotoBorder>
              {/* <TeamName>Руслана</TeamName> */}
            </TeamCard>
            <TeamCard>
              <PhotoBorder>
                <PhotoWrap>
                  <TeamPhoto src={IhorPhoto} alt="" />
                </PhotoWrap>
              </PhotoBorder>
              {/* <TeamName>Ігор</TeamName> */}
            </TeamCard>
          </TeamListSecond>
        </Team>
      </Container>
    </TeamPageContainer>
  );
};
