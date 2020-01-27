import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      padding: 10px;
    }
  }
`;
