import React from 'react';
import {InfoWrapper} from './Info.style';

const Info = ({section}) => {
    return (
      <InfoWrapper type={section.type.toUpperCase()} typeIcons={section.typeIcons.toUpperCase()}>
          <div className='icon-wrapper'>
              <div className={'icon ' + section.type}></div>
          </div>
          <div className='short-title'>{section.title}</div>
          <div className='describe'>{section.context}</div>
      </InfoWrapper>
    );
};

export default Info;
export { Info };
