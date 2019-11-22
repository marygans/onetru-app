import React from 'react';

import {CONTEXT} from '../../../constants/context';
import {FindSectionStyle} from './FindSection.style';
import Input from '../../../lib/Input/Input';
import {Button} from '../../../lib';

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

			<div className='find-wrapper'>
				<Input placeholder={placeholder} className='find-input' />
				<Button className='btn'>{button}</Button>
			</div>

		</FindSectionStyle>
	);
};

export default FindSection;
export {FindSection};
