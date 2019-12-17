import React from 'react';

import {InfoTitleStyle} from './InfoTitle.style';
import Button from '../../../lib/Button/Button';

const InfoTitle = ({
	                   name,
	                   smallInfo,
	                   onExportData,
	                   onAddToFavorite,
	                   onSendMessage,
                   }) => {

	return (
		<InfoTitleStyle>
			<div className="first-part">
				<div className="name">{name}</div>

				<div className="control">
					<div className="icon export" onClick={() => onExportData()}/>
					<div className="icon heart" onClick={() => onAddToFavorite()}/>
					<Button className="btn send-message" onClick={() => onSendMessage()}>Send a message</Button>
				</div>
			</div>

			<div className="second-part">
				<ul>
					{
						smallInfo ? smallInfo.map((info, i) => (
							<li key={i + info.key}>{info.value + ' ' + info.message}</li>
						)) : null
					}
				</ul>
			</div>
		</InfoTitleStyle>
	);

};

export default InfoTitle;
export {InfoTitle};
