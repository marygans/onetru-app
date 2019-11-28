import React from 'react';
import {CompareModalWrapper} from './CompareModal.style';
import Button from '../../../lib/Button/Button';
import {COMPARE_PROPERTY_MANAGERS} from '../../../constants/compare';
import TrTable from './TrTable/TrTable';
import FirstTrTable from './FirstTrTable/FirstTrTable';

const CompareModal = ({ data, closeCompareMenu }) => {
	const { managementType, ownerServices, tenantServices, leasingServices } = COMPARE_PROPERTY_MANAGERS;

	return (
		<CompareModalWrapper>
			<div className="info">
				<header>{"Compare property managers:"}</header>

				<main>
					<div className="info-wrapper">

						<table>
							<thead>
								<FirstTrTable data={data} />
							</thead>

							<tbody>
								<TrTable
									fieldParentName={managementType.name}
									fields={managementType.data}
									managers={data}
									typeField='managementType'
								/>

								<TrTable
									fieldParentName={ownerServices.name}
									fields={ownerServices.data}
									managers={data}
									typeField='ownerServices'
								/>

								<TrTable
									fieldParentName={tenantServices.name}
									fields={tenantServices.data}
									managers={data}
									typeField='tenantServices'
								/>

								<TrTable
									fieldParentName={leasingServices.name}
									fields={leasingServices.data}
									managers={data}
									typeField='leasingServices'
									fieldOfPrice='leasingFee'
								/>
							</tbody>
						</table>
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
