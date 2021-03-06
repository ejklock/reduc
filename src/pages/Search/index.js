import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Scope } from '@rocketseat/unform';
import { FaPlus, FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';

import queryString from 'query-string';

import NavBar from '../../components/NavBar';
import SearchItems from '../../components/SearchItems';
import SearchPaginator from '../../components/SearchPaginator';

import { searchPageRequest } from '../../store/modules/search/actions';
import SearchBlock from '../../components/SearchBlock';
import { Container, Section, Button, ButtonContainer } from './styles';

const schema = Yup.object().shape({
  fields: Yup.object().shape({
    lookfor: Yup.array(),
    bool: Yup.string(),
    type: Yup.array(),
  }),
});

export default function Search() {
  const {
    pagination: { records = [] },
    pagination: { totalItems },
  } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([]);
  const [index, setIndex] = useState(1);

  const [params, onSetParamsValue] = useState(
    queryString.parse(window.location.search, { arrayFormat: 'bracket' })
  );

  const [fieldsInitialData, setFieldsInitialData] = useState({
    fields: {
      type: ['AllFields'],
      bool: ['AND'],
    },
  });

  useEffect(() => {
    if (params) {
      dispatch(searchPageRequest(params));
    }
  }, [dispatch, params, onSetParamsValue]);

  function handleSubmit({
    fields: { lookfor, bool = 'AND', type = 'AllFields' },
  }) {
    dispatch(searchPageRequest({ lookfor, bool, type }));
  }

  function handleAddBtnClick() {
    setInputList(inputList.concat(<SearchBlock item={index} />));
    setFieldsInitialData({
      fields: {
        bool: [...fieldsInitialData.fields.bool, 'AND'],
        type: [...fieldsInitialData.fields.type, 'AllFields'],
      },
    });
    setIndex(index + 1);
  }

  return (
    <Container>
      <NavBar />
      <Section color="#EFEEEE">
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          initialData={fieldsInitialData}
        >
          <Scope path="fields">
            <SearchBlock />
            {inputList}
          </Scope>
          <ButtonContainer>
            <Button type="button" onClick={handleAddBtnClick}>
              <FaPlus />
              Adicionar Campo
            </Button>
            <Button type="submit" color="#28a745">
              <FaSearch />
              Realizar Busca
            </Button>
          </ButtonContainer>
        </Form>
      </Section>
      {records ? (
        <>
          <h3>Aproximadamente {totalItems} resultados </h3>
          <SearchItems records={records} />
          <SearchPaginator />
        </>
      ) : (
        ''
      )}
    </Container>
  );
}
