import React from 'react';
import {CompareModalWrapper} from './CompareModal.style';
import Button from '../../../lib/Button/Button';
import {COMPARE_PROPERTY_MANAGERS} from '../../../constants/compare';

const CompareModal = ({ data, closeCompareMenu }) => {
	const { managementType, ownerServices, tenantServices, leasingServices } = COMPARE_PROPERTY_MANAGERS;

	return (
		<CompareModalWrapper>
			<div className="info">
				<header>{"Compare property managers:"}</header>

				<main>
					<div className="info-wrapper">

						<table>



							<tbody>
								<tr className="item-wrapper">
									<th></th>
									{
										data && data.map((item, i) => (
												<th key={i + item.name}>
													<div className="item">
														<img src={item.img} alt={item.name} />
														<div className="name">{item.name}</div>
														<Button className="btn send-a-message">{"Send a message"}</Button>
													</div>
												</th>
											)
										)
									}
								</tr>

								<tr className="item-data">
									<td className="typeName">{managementType.name}</td>
								</tr>

								{
									managementType.data.map((item, i) => (
										<tr className="item-data" key={i + item.key + 'managementType'}>
											<td className="typeValue">{item.value}</td>
											{
												data.map((manager, i ) => (
													<td key={i + manager.name + 'managementType'}>
														<span className={manager[item.key] ? "ok" : "error"}></span>
													</td>
												))
											}
										</tr>
									))
								}

								<tr className="item-data">
									<td className="typeName">{ownerServices.name}</td>
								</tr>

								{
									ownerServices.data.map((item, i) => (
										<tr className="item-data" key={i + item.key + 'ownerServices'}>
											<td className="typeValue">{item.value}</td>
											{
												data.map((manager, i ) => (
													<td key={i + manager.name + 'ownerServices'}>
														<span className={manager[item.key] ? "ok" : "error"}></span>
													</td>
												))
											}
										</tr>
									))
								}

								<tr className="item-data">
									<td className="typeName">{tenantServices.name}</td>
								</tr>

								{
									tenantServices.data.map((item, i) => (
										<tr className="item-data" key={i + item.key + 'tenantServices'}>
											<td className="typeValue">{item.value}</td>
											{
												data.map((manager, i ) => (
													<td key={i + manager.name + 'tenantServices'}>
														<span className={manager[item.key] ? "ok" : "error"}></span>
													</td>
												))
											}
										</tr>
									))
								}

								<tr className="item-data">
									<td className="typeName">{leasingServices.name}</td>
								</tr>

								{
									leasingServices.data.map((item, i) => (
										<tr className="item-data" key={i + item.key + 'leasingServices'}>
											<td className="typeValue">{item.value}</td>
											{
												data.map((manager, i ) => (
													<td key={i + manager.name + 'leasingServices'}>
														<span className={manager[item.key] ? "ok" : "error"}></span>
													</td>
												))
											}
										</tr>
									))
								}

							</tbody>

						</table>

					</div>

					<div className="table-wrapper">

					</div>
				</main>

				<footer>
					<Button className="btn back" onClick={() => closeCompareMenu()}>{"Back to results"}</Button>
					<Button className="btn done" onClick={() => closeCompareMenu()}>{"Done"}</Button>
				</footer>
			</div>
		</CompareModalWrapper>
	)
};

export default CompareModal;
export { CompareModal };
