import styled from 'styled-components';

const BackgroundImg = styled.div`
  background-image: url('${props => props.imgObj}');
  background-repeat:no-repeat;
  background-size: cover;
  min-height: 200px;
  margin: auto;
`;

export default BackgroundImg;
