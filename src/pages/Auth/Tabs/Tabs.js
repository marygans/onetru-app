import React from 'react';

import Tab from './Tab/Tab';
import {TabsWrapper} from './Tabs.style';
import {useDispatch, useSelector} from 'react-redux';
import {selectActiveTab, selectTabs} from '../../../redux/tabs/selectors';
import {tabsActions} from '../../../redux/tabs/actions';

const Tabs = () => {
	const { data } = useSelector(selectTabs);
	const { activeTab } = useSelector(selectActiveTab);
	const dispatch = useDispatch();

	const onClickTabItem = (tab) => {
		dispatch(tabsActions.selectTab(tab));
	};

	return (
		<TabsWrapper className="tab-list">
			{data.map((tab, i) => {
				const {key, value} = tab;

				return (
					<Tab
						activeTab={activeTab}
						key={key + i}
						label={key}
						value={value}
						onClick={onClickTabItem}
					/>
				);
			})
			}
		</TabsWrapper>
	);
};

export default Tabs;
export { Tabs };
