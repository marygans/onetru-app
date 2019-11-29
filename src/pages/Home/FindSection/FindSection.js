import React from 'react';

import {CONTEXT} from '../../../constants/context';
import {FindSectionStyle} from './FindSection.style';
import FindPropertyManagers from '../FirstBlockContent/FindPropertyManagers/FindPropertyManagers';

const FindSection = ({sectionType}) => {
	const context = CONTEXT[sectionType.toUpperCase()];
	const {title, describe, placeholder, button} = context;

	return (
		<FindSectionStyle className={sectionType}>
			<h1 className={"title " + sectionType}>{title}</h1>
			<div className="info-wrapper">
				<span className={"description " + sectionType}>{describe}</span>
				<>
					{
						(sectionType === "QUESTIONS") ? (
							<>
							<span className='email'>
								{context.email}
							</span>

								<div className='secondDescribe'>
									{context.secondDescribe}
								</div>
							</>
						) : null
					}
				</>
			</div>

			<FindPropertyManagers placeholder={placeholder} button={button} sectionType={sectionType} />

		</FindSectionStyle>
	);
};

export default FindSection;
export {FindSection};
