import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Scope } from '@rocketseat/unform';
import { FaPlus, FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';
import JwPagination from 'jw-react-pagination';
import NavBar from '../../components/NavBar';
import SearchItems from '../../components/SearchItems';
import SearchPaginator from '../../components/SearchPaginator';
import { searchRequest } from '../../store/modules/search/actions';
import SearchBlock from '../../components/SearchBlock';
import { Container, Section, Button, ButtonContainer } from './styles';

const schema = Yup.object().shape({
  fields: Yup.object().shape({
    term: Yup.array(),
    bool: Yup.array(),
    type: Yup.array(),
  }),
});

export default function Search() {
  const {
    term,
    pagination,
    pagination: { records = [] },
  } = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [inputList, setInputList] = useState([]);
  const [index, setIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [fieldsInitialData, setFieldsInitialData] = useState({
    fields: {
      type: ['AllFields'],
      bool: ['AND'],
    },
  });

  function handleSubmit({ fields: term, fields: type, fields: bool }) {
    dispatch(searchRequest(term, type, bool));
  }

  function handlePageChange() {
    setCurrentPage(currentPage + 1);
    console.log('oi', currentPage);
    dispatch(searchRequest(term, currentPage));
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
          <SearchItems records={records} />
        </>
      ) : (
        ''
      )}
    </Container>
  );
}
