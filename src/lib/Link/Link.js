import React from 'react';
import { NavLink } from 'react-router-dom';

import * as PropTypes from 'prop-types';

const Link = ({ children, ...restProps }) => {
    return (
        <NavLink {...restProps}>
            {children}
        </NavLink>
    );
};

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

Link.defaultProps = {
    children: null,
};

export default Link;
export { Link };
