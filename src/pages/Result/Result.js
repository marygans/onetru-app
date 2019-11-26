import React from 'react';

import {ResultWrapper} from './Result.wrapper.style';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SecondBlockContent from './SecondBlockContent/SecondBlockContent';

const Result = () => {
	return (
		<ResultWrapper>
			<FirstBlockContent sectionType="result" />
			<SecondBlockContent />
		</ResultWrapper>
	)
};

export default Result;
export { Result };
