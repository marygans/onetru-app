import React from 'react';

import {FindPropertyManagersStyled} from './FindPropertyManagers.style';
import Input from '../../../../lib/Input/Input';
import {Button} from '../../../../lib/Button';

const FindPropertyManagers = () => {

    return (
        <FindPropertyManagersStyled>
            <Input name="findPropertyManagers" type="text" />
            <Button className="searchBtn">Search</Button>
        </FindPropertyManagersStyled>
    );
};

export default FindPropertyManagers;
export { FindPropertyManagers };
