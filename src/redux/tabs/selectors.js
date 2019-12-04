import {createSelector} from 'reselect';

const data = ({ Tabs }) => Tabs.tabs;
const activeTab = ({ Tabs }) => Tabs.activeTab;

export const selectTabs = createSelector(
	[data],
	(data) => ({ data })
);

export const selectActiveTab = createSelector(
	[activeTab],
	(activeTab) => ({ activeTab })
);
