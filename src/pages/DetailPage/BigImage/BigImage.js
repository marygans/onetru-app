import React from 'react';

import {ImageFirst} from './BigImage.style';

const BigImage = ({activeImage}) => {

	return (
		<ImageFirst imagePath={activeImage} alt='company-image'/>
	)
};

export default BigImage;
export { BigImage };
