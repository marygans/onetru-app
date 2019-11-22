import React from 'react';

import {FindPropertyManagersStyled} from './FindPropertyManagers.style';
import Input from '../../../../lib/Input/Input';
import {Button} from '../../../../lib/Button';

const FindPropertyManagers = ({placeholder, button}) => {

    return (
        <FindPropertyManagersStyled>
            <Input name="findPropertyManagers" type="text" placeholder={placeholder} />
            <Button className="searchBtn">{button}</Button>
        </FindPropertyManagersStyled>
    );
};

export default FindPropertyManagers;
export { FindPropertyManagers };
