import React from 'react';

import { Header, MainContent, Footer } from '../../components/layouts';
import { RestrictedRoutes } from '../../routes';
import {TopBar} from '../TopBar';
import FooterContent from './FooterContent/FooterContent';
import Overlay from '../../components/Overlay/Overlay';

const Root = () => {
    return (
        <>
            <Overlay />

            <Header>
                <TopBar />
            </Header>

            <MainContent>
                <RestrictedRoutes />
            </MainContent>

            <Footer>
              <FooterContent />
            </Footer>
        </>
    )
};

export default Root;
export { Root };
