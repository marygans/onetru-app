import React from 'react';

import { Header, MainContent, Footer } from '../../components/layouts';
import { RestrictedRoutes } from '../../routes';
import {TopBar} from '../TopBar';
import HeaderContent from './HeaderContent/HeaderContent';

const Root = () => {
    return (
        <>
            <Header>
                <TopBar />
                <HeaderContent />
            </Header>

            <MainContent>
                <RestrictedRoutes />
            </MainContent>

            <Footer />
        </>
    )
};

export default Root;
export { Root };
