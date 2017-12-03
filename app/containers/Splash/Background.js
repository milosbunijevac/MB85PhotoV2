import styled from 'styled-components';
import vof from '../../images/vof.jpg';

const Background = styled.img`
  background-image: url(${vof});
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default Background;
