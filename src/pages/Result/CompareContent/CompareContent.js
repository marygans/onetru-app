import React from 'react';

import {CompareContentWrapper} from './CompareContent.style';
import Button from '../../../lib/Button/Button';

const CompareContent = ({ data, onResetCompare }) => {

	return (
		<CompareContentWrapper>
			<div className="item-wrapper">
				{
					data && data.map((item, i) => (
						<div key={i + item.img}>
							<img src={item.img} alt={item.name} />
							<span>{item.name}</span>
						</div>
					))
				}
			</div>
			<div className="control-wrapper">
				<div>
					<Button className="btn">
						<span>{"Compare Property Managers"}</span>
						<span className="icon-boll">{data.length}</span>
					</Button>
				</div>
				<span className="reset" onClick={() => onResetCompare()}>{"Reset"}</span>
			</div>

		</CompareContentWrapper>
	)
};

export default CompareContent;
export { CompareContent };
