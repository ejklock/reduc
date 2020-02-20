import React from 'react';
import { Container } from './styles';
import LogoUFmt from '../../assets/img/logo_ufmt_negativo_Prancheta_1.png';
import HeaderReduc from '../../components/HeaderReduc';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SearchInput from '../../components/SearchInput';
import Section from '../../components/Section';
import Media from '../../components/Media';
import MidiasEducacionais from '../../assets/img/midias.svg';
import Apps from '../../assets/img/desenvol_aplicativo.svg';
import Text from '../../assets/img/material_textual.svg';
import AtividadesExtensao from '../../assets/img/extensao.svg';
import PosGraducao from '../../assets/img/pos_graduacao.svg';
import OrganizacaoEvento from '../../assets/img/organizacao_evento.svg';
import RelatorioPesquisa from '../../assets/img/relatorio_pesquisa.svg';
import Extensao from '../../assets/img/extensao.svg';
import Graduacao from '../../assets/img/graduacao.svg';

const medias = [
  {
    icon: AtividadesExtensao,
    name: 'Atividades de extensão',
    url: 'format%3A%22Atividades+de+extens%C3%A3o%22',
  },
  {
    icon: Apps,
    name: 'Desenvolvimento de Aplicativos',
    url: 'format%3A%22Desenvolvimento+de+aplicativos%22',
  },
  {
    icon: Text,
    name: 'Material Textual',
    url: 'format:"Material+textual"',
  },
  {
    icon: MidiasEducacionais,
    name: 'Midias Educacionais',
    url: 'format%3A%22M%C3%ADdias+educacionais%22',
  },
  {
    icon: OrganizacaoEvento,
    name: 'Organização de Eventos',
    url: 'format%3A%22Organiza%C3%A7%C3%A3o+de+evento%22',
  },
  {
    icon: RelatorioPesquisa,
    name: 'Relatório de Pesquisa',
    url: 'format%3A%22Relat%C3%B3rios+de+pesquisa%22',
  },
  {
    icon: Extensao,
    name: 'Extensão',
    url: 'format%3A%22Atividades+de+extens%C3%A3o%22',
  },
];

const courses = [
  {
    icon: Extensao,
    name: 'Extensão',
  },
  {
    icon: Graduacao,
    name: 'Graduação',
  },
  {
    icon: PosGraducao,
    name: 'Pós Graduação',
  },
];

export default function Main() {
  return (
    <Container>
      <HeaderReduc>
        <NavBar background="transparent" />
        <SearchInput />
      </HeaderReduc>
      <Section title="Tipos de Mídia">
        <Media medias={medias} />
      </Section>
      <Section title="Cursos" color="#EFEEEE">
        <Media medias={courses} />
      </Section>

      <Footer logo={LogoUFmt} />
    </Container>
  );
}
