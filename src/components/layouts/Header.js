import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { bg, height } = THEME;

export const Header = styled.header`
  display: block;
  background-color: ${bg.header};
  padding: 20px 38px 0;
`;
