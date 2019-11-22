import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { text } = THEME;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  background: radial-gradient(54.1% 54.1% at 50% 54.1%, #0E6000 0%, #0D5C00 100%);
  color: ${text.invert};
  padding: 0 50px;
`;
