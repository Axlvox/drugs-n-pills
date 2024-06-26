import { useEffect, useState } from 'react';
import CardCategorias from '../cardCategorias/CardCategorias';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';

type Props = {
  categorias: Categoria[];
};

function ListaCategorias({ categorias: categoriasProp }: Props) {
  const [categorias, setCategorias] = useState<Categoria[]>(categoriasProp);

  async function buscarCategorias() {
    try {
      // Simula a busca de categorias
      const categoriasData = await buscar('/categorias', {});
      // Atualiza o estado com os dados mockados
      setCategorias(categoriasData);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
