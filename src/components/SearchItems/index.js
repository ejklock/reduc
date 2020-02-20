import React from 'react';
import Extensao from '../../assets/img/atividades_extensao.svg';
import MaterialTextual from '../../assets/img/material_textual.svg';
import DesenvolvimentoAplicativos from '../../assets/img/desenvol_aplicativo.svg';
import MidiasEducacionais from '../../assets/img/midias.svg';
import OrganizacaoEvento from '../../assets/img/organizacao_evento.svg';
import RelatorioPesquisa from '../../assets/img/relatorio_pesquisa.svg';

import { Container, Card, CardBody } from './styles';

const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};
export default function SearchItems({ records = [] }) {
  function getIcon(format) {
    switch (format) {
      case 'Atividades de extensão':
        return Extensao;
      case 'Mídias Educacionais':
        return MidiasEducacionais;
      case 'Desenvolvimento de aplicativos':
        return DesenvolvimentoAplicativos;
      case 'Relatórios de pesquisa':
        return RelatorioPesquisa;

      case 'Organização de evento':
        return OrganizacaoEvento;

      default:
        return MaterialTextual;
    }
  }

  function getAuthors(authors) {
    const keys = Object.keys(authors.primary);
    const result = keys.join();
    return result;
  }

  function getUrl(urls) {
    if (urls.length > 0) {
      return urls.find(e => true).url;
    }
    return '';
  }
  return (
    <Container>
      {records
        ? records.map(item => (
            <Card key={generateKey(item.id)}>
              <img
                src={getIcon(
                  Array.isArray(item.formats) ? item.formats[0] : ''
                )}
                alt="Icone de tipo de material"
              />
              <CardBody>
                <a href={getUrl(item.urls)}>
                  <h4>{item.title}</h4>
                </a>

                <h5>{getAuthors(item.authors)}</h5>
              </CardBody>
            </Card>
          ))
        : ''}
    </Container>
  );
}
