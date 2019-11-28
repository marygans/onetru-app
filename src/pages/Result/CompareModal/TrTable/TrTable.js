import React from 'react';

const TrTable = ({ fieldParentName, fields, typeField, managers, fieldOfPrice }) => {

	return (
		<>
			<tr className="item-data">
				<td className="typeName">{fieldParentName}</td>
			</tr>

			{
				fields.map((field, i) => (
					<tr className="item-data" key={i + field.key + typeField}>
						<td className="typeValue">{field.value}</td>
						{
							managers.map((manager, i ) => (
								<td key={i + manager.name + typeField} className="detail">
									{
										fieldOfPrice && field.key === fieldOfPrice ?
										<span className="price">${manager[field.key]}</span> :
										<span className={manager[field.key] ? "ok" : "error"}></span>
									}

								</td>
							))
						}
					</tr>
				))
			}
		</>
	)
};

export default TrTable;
export { TrTable };
