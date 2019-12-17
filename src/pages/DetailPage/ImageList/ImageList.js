import React from 'react';

import {Image, ImageListWrapper} from './ImageList.style';

const ImageList = ({images, activeImage, selectImage}) => {

	return (
		<ImageListWrapper className="image-list-wrapper">
			{
				images ? images.map((image, i) => (
					<Image imagePath={image}
					       key={'small-image' + i}
					       className={activeImage === image ? 'active' : ''}
					       onClick={() => selectImage(image)}
					>
						<div className="wrapper"/>
					</Image>
				)) : null
			}
		</ImageListWrapper>
	);

};

export default ImageList;
export {ImageList};
