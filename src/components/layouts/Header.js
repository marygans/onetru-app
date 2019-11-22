import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { maxWidth } = THEME;

export const Header = styled.header`
  width: 100%;
  max-width: ${maxWidth.header}px;
  position: fixed;
`;
