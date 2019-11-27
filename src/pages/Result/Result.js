import React from 'react';

import {ResultWrapper} from './Result.wrapper.style';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SecondBlockContent from './SecondBlockContent/SecondBlockContent';
import CompareContent from './CompareContent/CompareContent';
import {useDispatch, useSelector} from 'react-redux';
import {selectCompareData, selectorIsMaximumItemsAreCompare} from '../../redux/compare/selector';
import {selectResult} from '../../redux/search/selectors';
import {compareActions} from '../../redux/compare/actions';

const Result = () => {
	const { data } = useSelector(selectCompareData);
	const isMaximumItemsAreCompare = useSelector(selectorIsMaximumItemsAreCompare);
	const {result} = useSelector(selectResult);
	const dispatch = useDispatch();

	const addItemToCompare = (item) => {
		dispatch(compareActions.addItemToCompare(item));
	};

	const onResetCompare = () => {
		dispatch(compareActions.reset());
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
				data.length ? <CompareContent data={data} onResetCompare={onResetCompare} /> : null
			}
		</ResultWrapper>
	)
};

export default Result;
export { Result };
