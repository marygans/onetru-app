import React from 'react';
import FirstBlockContent from './FirstBlockContent/FirstBlockContent';
import SectionContent from './SectionContent/SectionContent';
import FindSection from './FindSection/FindSection';

const Home = () => {
  return (
    <>
        <FirstBlockContent sectionType="FIRST_SECTION" />
        <SectionContent sectionType="LANDLORD" />
        <SectionContent sectionType="PROPERTY_MANAGER" />
        <FindSection sectionType="FIND_MANAGER_TODAY" />
        <FindSection sectionType="QUESTIONS" />
    </>
  );
};

export default Home;
export { Home };
