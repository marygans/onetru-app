import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';
import {ICONS} from '../../../../constants/resources';

const { colors } = THEME;

export const FilterWrapper = styled.div`
	.title {
		font-style: normal;
		font-weight: normal;
		font-size: 36px;
		line-height: 42px;
		color: ${colors.black};
		padding-right: 15px;
	}
	
	.ratings, .managementType, .serviceType {
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 28px;
		margin-right: 17px;
		border: 2px solid #9A9A9A;
		box-sizing: border-box;
		border-radius: 4px;
		background: ${colors.whiteWithEasilyGray};
		color: ${colors.filterText};
		padding: 1px 44px 1px 23px;
		-moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background: url(${ICONS.RESULT_PAGE.ARROW_DOWN}) no-repeat;
    background-position-x: calc(100% - 12px);
  	background-position-y: 10px;
	}

`;
