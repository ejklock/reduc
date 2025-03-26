import {
  FaVideo,
  FaBook,
  FaImage,
  FaFileAudio,
  FaChalkboardTeacher,
  FaSlideshare,
} from 'react-icons/fa';
import MidiasEducacionais from '../../assets/img/midias.svg';
import Text from '../../assets/img/material_textual.svg';
import PosGraducao from '../../assets/img/pos_graduacao.svg';
import OrganizacaoEvento from '../../assets/img/organizacao_evento.svg';
import RelatorioPesquisa from '../../assets/img/relatorio_pesquisa.svg';
import Extensao from '../../assets/img/extensao.svg';
import Graduacao from '../../assets/img/graduacao.svg';

const medias = [
  {
    icon: Extensao,
    name: 'Atividades de extensão',
    url: 'format%3A%22Atividades+de+extens%C3%A3o%22',
    svg: false,
  },
  {
    icon: FaChalkboardTeacher,
    name: 'Aulas Digitais',
    url: 'format:"aula+digital"',
    svg: true,
  },
  {
    icon: FaSlideshare,
    name: 'Apresentações',
    url: 'format:"apresentação"',
    svg: true,
  },

  {
    icon: Text,
    name: 'Material Textual',
    url: 'format:"Material+textual"',
    svg: false,
  },
  {
    icon: Graduacao,
    name: 'Cursos',
    url: 'format:"curso"',
    svg: false,
  },
  {
    icon: FaBook,
    name: 'Livros Digitais',
    url: 'format:"livro+digital"',
    svg: true,
  },
  {
    icon: FaVideo,
    name: 'Vídeos',
    url: 'format:"vídeo"',
    svg: true,
  },
  {
    icon: FaFileAudio,
    name: 'Áudios',
    url: 'format:"áudio"',
    svg: true,
  },
  {
    icon: FaImage,
    name: 'Imagens',
    url: 'format:"imagem"',
    svg: true,
  },
  {
    icon: MidiasEducacionais,
    name: 'Midias Educacionais',
    url: 'format%3A%22M%C3%ADdias+educacionais%22',
    svg: false,
  },
  {
    icon: OrganizacaoEvento,
    name: 'Organização de Eventos',
    url: 'format%3A%22Organiza%C3%A7%C3%A3o+de+evento%22',
    svg: false,
  },
  {
    icon: RelatorioPesquisa,
    name: 'Relatório de Pesquisa',
    url: 'format%3A%22Relat%C3%B3rios+de+pesquisa%22',
    svg: false,
  },
  {
    icon: Extensao,
    name: 'Extensão',
    url: 'format%3A%22Atividades+de+extens%C3%A3o%22',
    svg: false,
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

export { medias, courses };
