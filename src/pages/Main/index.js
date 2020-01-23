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
import ProgramaRadio from '../../assets/img/programa_radio.svg';
import Apps from '../../assets/img/desenvol_aplicativo.svg';
import Text from '../../assets/img/material_textual.svg';
import Patentes from '../../assets/img/patentes.svg';
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
  },
  {
    icon: ProgramaRadio,
    name: 'Programa de Rádio e Tv',
  },
  {
    icon: Apps,
    name: 'Desenvolvimento de Aplicativos',
  },
  {
    icon: Text,
    name: 'Material Textual',
  },
  {
    icon: Patentes,
    name: 'Patentes',
  },
  {
    icon: MidiasEducacionais,
    name: 'Midias Educacionais',
  },
  {
    icon: PosGraducao,
    name: 'Pós Graduação',
  },
  {
    icon: OrganizacaoEvento,
    name: 'Organização de Eventos',
  },
  {
    icon: RelatorioPesquisa,
    name: 'Relatório de Pesquisa',
  },
  {
    icon: Extensao,
    name: 'Extensão',
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
        <NavBar />
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
