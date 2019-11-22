import styled from 'styled-components';

const AbsoluteLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #F5F5F5;
`;

export default AbsoluteLayout;
export { AbsoluteLayout };
