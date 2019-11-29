import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useDispatch} from 'react-redux';

import {FindPropertyManagersStyled} from './FindPropertyManagers.style';
import Input from '../../../../lib/Input/Input';
import {Button} from '../../../../lib/Button';
import searchActions from '../../../../redux/search/actions';

const initValue = {
  search: '',
};

const FindPropertyManagers = ({placeholder, button, sectionType}) => {

    const dispatch = useDispatch();

    const onSubmit = (values, actions) => {
      dispatch(searchActions.search(values));
      actions.setSubmitting(false);
    };

    return (
        <FindPropertyManagersStyled className={sectionType}>
          <Formik
            enableReinitialize
            initialValues={initValue}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="form">
                <Field name="search">
                  {
                    (fieldProps) => (
                      <Input
                        placeholder={placeholder}
                        {...fieldProps}
                      />
                    )
                  }
                </Field>

                <Button className={sectionType ? sectionType + " searchBtn" : "searchBtn"} type='submit'>
                  <span>{button}</span></Button>
              </Form>
            )}
          </Formik>
        </FindPropertyManagersStyled>
    );
};

export default FindPropertyManagers;
export { FindPropertyManagers };
