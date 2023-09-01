import bgImage from '../../../src/images/bg.jpg';
const { styled } = require('styled-components');

const HomePageWrap = styled.div`
  /* padding-left: auto; */
  /* margin-right: auto; */
  background-image: url(${bgImage});
  /* background-color: green; */
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  /* position: fixed;
  top: 0;
  z-index: -1;*/
  /* height: 1038px; */
  height: 100%;
  /* border-bottom: 2px solid black; */
`;

export default HomePageWrap;

// @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//   .background {
//     background-image: url('../../../src/images/background/bg-mobile@2x.png');
//   }
// }

// @media screen and (min-width: 480px) {
//   .background {
//     background-image: url('../../../src/images/background/bg-tablet@1x.png');
//   }

//   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//     .background {
//       background-image: url('../../../src/images/background/bg-tablet@2x.png');
//     }
//   }
// }

// @media screen and (min-width: 768px) {
//   .background {
//     background-image: url('../../../src/images/background/bg-desktop@1x.png');
//   }

//   @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
//     .background {
//       background-image: url('../../../src/images/background/bg-desktop@2x.png');
//     }
//   }
// }
