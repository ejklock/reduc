import React from 'react';
import Section from '../../components/Section';
import SectionText from '../../components/SectionText';
import NavBar from '../../components/NavBar';

export default function Contato() {
  return (
    <>
      <NavBar />
      <Section title="Contato">
        <SectionText>
          <p>
            Se tiver algum problema, d&uacute;vida ou sugest&atilde; envie um
            email para{' '}
            <a href="mailto:ufmtemrede@ufmt.br">ufmtemrede@ufmt.br</a>
          </p>
        </SectionText>
      </Section>
    </>
  );
}
