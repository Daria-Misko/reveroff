const { styled } = require('styled-components');

const TeamPageContainer = styled.div`
  background-color: #021407;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 200;
  color: #ffffff;
  text-align: center;
  margin-top: 41px;
  margin-bottom: 80px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
`;

const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 40px;
`;

const TeamListSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TeamCard = styled.div``;

const PhotoBorder = styled.div`
  width: 400px;
  height: 477px;
  border: 1px solid #cdaa7d;
  position: relative;
  margin-bottom: 20px;
`;

const PhotoWrap = styled.div`
  width: 400px;
  height: 477px;
  display: block;
  /* border-radius: 200px; */
  overflow: hidden;
  position: absolute;
  top: 20px;
  right: 16px;
  margin-bottom: 80px;
`;

const TeamPhoto = styled.img`
  width: 100%;
`;
const TeamName = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;

export {
  TeamList,
  TeamCard,
  TeamPhoto,
  TeamName,
  PhotoWrap,
  Title,
  TeamPageContainer,
  PhotoBorder,
  TeamListSecond,
  Team,
};
