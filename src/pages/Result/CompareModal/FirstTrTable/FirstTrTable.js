import React from 'react';
import Button from '../../../../lib/Button/Button';

const FirstTrTable = ({ data }) => {

	return (
		<>
			<tr className="item-wrapper">
				<th></th>
				{
					data && data.map((item, i) => (
							<th key={i + item.name}>
								<div className={item.isBest ? "item best" : "item"}>
									<div className="bestValue">{ item.isBest ? "Best Value" : null }</div>
									<img src={item.img} alt={item.name} />
									<div className="name">{item.name}</div>
									<Button className="btn send-a-message">{"Send a message"}</Button>
								</div>
							</th>
						)
					)
				}
			</tr>
		</>
	)

};

export default FirstTrTable;
export { FirstTrTable };
