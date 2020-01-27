import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const PaginatorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    border: 0;

    svg {
      font-size: 40px;
      color: #3a1d98;
    }
  }
`;

export const PaginatorListItem = styled.li`
  padding: 5px;

  font-family: 'Rubik';

  button {
    border: 0;
    background: none;
    padding: 5px;
    color: ${props => (props.currentPage ? '#fff' : '#3a1d98')};
    border-radius: 5px;
    font-size: 28px;
    background: ${props => (props.currentPage ? 'rgba(0,0,255,0.8)' : '')};
  }
`;
