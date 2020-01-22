import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  border: 1px solid #707070;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;

export const CardImage = styled.div`
  height: 254px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image});
  border: 0;

  background-repeat: no-repeat;
`;

export const CardBody = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-family: 'Rubik;';
  font-size: 22px;
  font-weight: bold;
  padding-left: 15px;
  padding-right: 15px;
  margin: 30px auto;
  color: #28166f;
`;

export const Button = styled.a`
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  border: none;
  display: inline-block;
  text-align: center;
  padding: 10px;
  font-size: 22px;
  font-family: 'Rubik';
  width: 100%;
`;
