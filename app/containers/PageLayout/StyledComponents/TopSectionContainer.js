import styled from 'styled-components';
// import img from '../../../images/foggy.jpg';
import img from '../../../images/stonehenge.jpg';

const TopSectionContainer = styled.div`
  display: block;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 93%;
  margin-right: auto;
  margin-left: auto;
  z-index: auto;
`;

export default TopSectionContainer;