import React from 'react';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SectionContent from './SectionContent/';

const Home = () => {
  return (
    <>
        <FirstBlockContent />
        <SectionContent sectionType="LANDLORD" />
        <SectionContent sectionType="PROPERTY_MANAGER" />
    </>
  );
};

export default Home;
export { Home };
