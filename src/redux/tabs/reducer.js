import Immutable from 'seamless-immutable';

import {tabsActions} from './actions';
import {CONTEXT} from '../../constants/context';

const initState = Immutable.from({
	tabs: CONTEXT.AUTH_TABS.data,
	activeTab: CONTEXT.AUTH_TABS.data[0].key,
});

export default function tabs(state = initState, { type, payload }) {
	switch(type) {
		case tabsActions.SELECT_TAB: {
			return Immutable.set(state, 'activeTab',  payload.activeTab);
		}
		default: {
			return state;
		}
	}

}
