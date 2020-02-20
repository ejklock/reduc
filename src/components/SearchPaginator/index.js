import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { searchPageRequest } from '../../store/modules/search/actions';

import { Container, PaginatorList, PaginatorListItem } from './styles';

export default function SearchPaginator() {
  const {
    params,
    filters,

    pagination: { pages = [], currentPage, endPage },
  } = useSelector(state => state.search);

  console.log(filters);

  const dispatch = useDispatch();

  function handlePageClick(page) {
    dispatch(searchPageRequest(params, { limit: 20, page }));
  }

  return (
    <Container>
      {pages ? (
        <>
          <PaginatorList>
            <button
              type="button"
              onClick={() =>
                currentPage !== endPage ? handlePageClick(currentPage - 1) : ''
              }
            >
              <FaArrowLeft />
            </button>
            {pages.map(page => (
              <PaginatorListItem key={page} currentPage={page === currentPage}>
                <button onClick={() => handlePageClick(page)} type="button">
                  {page}
                </button>
              </PaginatorListItem>
            ))}

            <button
              type="button"
              onClick={() =>
                currentPage !== endPage ? handlePageClick(currentPage + 1) : ''
              }
            >
              <FaArrowRight />
            </button>
          </PaginatorList>
        </>
      ) : (
        ''
      )}
    </Container>
  );
}
