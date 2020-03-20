import React from 'react';

import LogoUFmt from '../../assets/img/logo_ufmt_negativo_Prancheta_1.png';
import HeaderReduc from '../../components/HeaderReduc';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SearchInput from '../../components/SearchInput';
import Section from '../../components/Section';
import Media from '../../components/Media';
import { medias, courses } from '../../enums/medias';

export default function Main() {
  return (
    <>
      <NavBar background="#130934" />
      <HeaderReduc>
        <SearchInput />
      </HeaderReduc>
      <Section title="Tpos de Mídia">
        <Media medias={medias} />
      </Section>
      <Footer logo={LogoUFmt} />
    </>
  );
}
