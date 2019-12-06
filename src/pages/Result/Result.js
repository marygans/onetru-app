import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ResultWrapper} from './Result.wrapper.style';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SecondBlockContent from './SecondBlockContent/SecondBlockContent';
import CompareContent from './CompareContent/CompareContent';
import {selectCompareData, selectorIsMaximumItemsAreCompare, selectUiStatus} from '../../redux/compare/selector';
import {selectHasMoreItems, selectResult} from '../../redux/search/selectors';
import {compareActions} from '../../redux/compare/actions';
import CompareModal from './CompareModal/CompareModal';
import {overlayActions} from '../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../constants/overlay';
import {searchActions} from '../../redux/search/actions';

const Result = () => {
	const dispatch = useDispatch();

	const { data } = useSelector(selectCompareData);
	const isMaximumItemsAreCompare = useSelector(selectorIsMaximumItemsAreCompare);
	const {result} = useSelector(selectResult);
	const { isShow } = useSelector(selectUiStatus);
	const { hasMore } = useSelector(selectHasMoreItems);

	const addItemToCompare = (item) => {
		dispatch(compareActions.addItemToCompare(item));
	};

	const onResetCompare = () => {
		dispatch(compareActions.reset());
	};

	const showCompareMenu = () => {
		dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.COMPARE));
		dispatch(compareActions.showCompareMenu());
	};

	const closeCompareMenu = () => {
		dispatch(overlayActions.hide());
		dispatch(compareActions.closeCompareMenu());
	};

	const fetchMoreData = () => {
		dispatch(searchActions.fetchMoreData());
	};

	return (
		<ResultWrapper>
			<FirstBlockContent sectionType="result" />
			<SecondBlockContent
				isMaximumItemsAreCompare={isMaximumItemsAreCompare}
				result={result}
				addItemToCompare={addItemToCompare}
				fetchMoreData={fetchMoreData}
				hasMore={hasMore}
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
