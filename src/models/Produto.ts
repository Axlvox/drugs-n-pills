import Categoria from './Categoria';

export default interface Produto {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  categoria?: Categoria;
  foto?: string;
  nome?: string;
  preco?: number;
  imagemUrl?: string;
}