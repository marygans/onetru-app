import React from 'react';

const InfoType = ({isChangeTypeOfUser}) => {

	return (
		<span className="switch-type-user">
			{
				isChangeTypeOfUser ? 'To be owner' : 'To be manager'
			}
		</span>
	)
};

export default InfoType;
export {InfoType};
