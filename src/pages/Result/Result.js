import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ResultWrapper} from './Result.wrapper.style';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SecondBlockContent from './SecondBlockContent/SecondBlockContent';
import CompareContent from './CompareContent/CompareContent';
import {selectCompareData, selectorIsMaximumItemsAreCompare, selectUiStatus} from '../../redux/compare/selector';
import {selectResult} from '../../redux/search/selectors';
import {compareActions} from '../../redux/compare/actions';
import CompareModal from './CompareModal/CompareModal';

const Result = () => {
	const dispatch = useDispatch();

	const { data } = useSelector(selectCompareData);
	const isMaximumItemsAreCompare = useSelector(selectorIsMaximumItemsAreCompare);
	const {result} = useSelector(selectResult);
	const { isShow } = useSelector(selectUiStatus);

	const addItemToCompare = (item) => {
		dispatch(compareActions.addItemToCompare(item));
	};

	const onResetCompare = () => {
		dispatch(compareActions.reset());
	};

	const showCompareMenu = () => {
		dispatch(compareActions.showCompareMenu());
	};

	const closeCompareMenu = () => {
		dispatch(compareActions.closeCompareMenu());
	};

	return (
		<ResultWrapper>
			<FirstBlockContent sectionType="result" />
			<SecondBlockContent
				isMaximumItemsAreCompare={isMaximumItemsAreCompare}
				result={result}
				addItemToCompare={addItemToCompare}
			/>
			{
				data.length ? <CompareContent data={data} onResetCompare={onResetCompare} showCompareMenu={showCompareMenu} /> : null
			}
			{
				isShow ? <CompareModal data={data} closeCompareMenu={closeCompareMenu} /> : null
			}
		</ResultWrapper>
	)
};

export default Result;
export { Result };
