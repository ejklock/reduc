import React from 'react';

import Section from '../../components/Section';
import SectionText from '../../components/SectionText';
import NavBar from '../../components/NavBar';

export default function About() {
  return (
    <>
      <NavBar />
      <Section title="O REduc">
        <SectionText>
          <p>
            O REduc é um Repositório Digital para Educação, que integra um dos
            produtos do projeto UFMT Em Rede. O repositório REduc tem por
            objetivo disponibilizar uma variedade de materiais na categoria de
            Recursos Educacionais Abertos (REA), sendo esses em diferentes
            formatos de texto, áudio, vídeo, animação, aplicativo, entre outros.
            Por se tratar de REA, é possível fazer download dos materiais para
            uso, reuso, remixagem e compartilhamento, o que redunda numa cadeia
            evolutiva para a democratização do conhecimento.
          </p>
          <p>
            A tecnologia REduc, possibilita ao usuário realizar diferentes tipos
            de buscas para localizar o material desejado, sendo essas por termos
            e também por filtros mais avançados (título, ano, autor, tipo de
            material) indexados na rede de produtos pertencentes ao projeto UFMT
            Em Rede, por meio de um motor indexador de conteúdo chamado Vufind.
            Os materiais depositados no REduc, são oriundos da produção
            acadêmica de professores e demais profissionais especializados, com
            abrangência em diferentes áreas do conhecimento, resultantes de
            pesquisas e projetos nacionais e internacionais da Universidade
            Federal de Mato Grosso, como também de outras Instituições Públicas
            de Ensino.
          </p>
          <p>
            OBS: O REduc está em constante processo de aprimoramento e
            melhoramento
          </p>
        </SectionText>
      </Section>
    </>
  );
}
