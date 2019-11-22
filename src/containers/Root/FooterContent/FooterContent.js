import React from 'react';
import {FooterContentWrapper} from './FooterContent.style';
import {CONTEXT} from '../../../constants/context';
import Link from '../../../lib/Link';

const FooterContent = () => {
	const { FOOTER } = CONTEXT;
	const { links, licence } = FOOTER;

	return (
		<FooterContentWrapper>
			<div className="link-wrapper">
				{
					links.map((link, i) => (
						<Link key={link + i} to={link.href} className="link">{link.name}</Link>
					))
				}
			</div>
			<hr/>
			<div className="licence-wrapper">
				<span>{licence}</span>
			</div>
		</FooterContentWrapper>
	);
};

export default FooterContent;
export { FooterContent };
