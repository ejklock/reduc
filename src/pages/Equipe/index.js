import React from 'react';
import Section from '../../components/Section';
import { SectionText } from './styles';
import NavBar from '../../components/NavBar';

export default function Equipe() {
  return (
    <div>
      <NavBar />
      <Section title="Equipe">
        <SectionText>
          <section>
            <p>Alexande Martins dos Anjos</p>
            <strong>Coordenador Geral</strong>
          </section>
          <section>
            <p>Bruno Santos Abdalla</p>
            <strong>
              Tecn&oacute;logo An&aacute;lise e Desenvolvimento de Sistemas
            </strong>
          </section>
          <section>
            <p>Evaldo Jos&eacute; Klock Neto</p>
            <strong>Analista de TI&nbsp;</strong>
          </section>
          <section>
            <p>Marlon Capelari</p>
            <strong>
              Tecn&oacute;logo An&aacute;lise e Desenvolvimento de Sistemas
            </strong>
          </section>
          <section>
            <p>Rosana Abutakka V. dos Anjos</p>
            <strong>Apoio T&eacute;cnico Audiovisual</strong>
          </section>
          <section>
            <p>Tatiane Hirata</p>
            <strong>Web Designer</strong>
          </section>
        </SectionText>
      </Section>
    </div>
  );
}
