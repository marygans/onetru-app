import React from 'react';
import {SectionContentStyle} from './SectionContent.style';

import Info from './Info/Info';
import {CONTEXT} from '../../../constants/context';

const SectionContent = ({sectionType}) => {
  const { title, icons } = CONTEXT[sectionType.toUpperCase()];

	return (
		<SectionContentStyle className={sectionType}>
			<h1 className="title">{title}</h1>

			<div className="info-wrapper">
				{
          icons.map((section, i) => (
            <Info key={sectionType + i} section={section} />
            )
          )
				}
			</div>

		</SectionContentStyle>
	);
};

export default SectionContent;
export {SectionContent};
