import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../services/Service';
import Produto from '../../../models/Produto';
import CardProduto from '../cardProdutos.tsx/CardProdutos';

import remediosMock from '../../../components/mocks/remediosMock';


function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>(remediosMock);
    const [loading, setLoading] = useState<boolean>(true);

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const produtosData = await buscar('/produtos', setProdutos);
        setProdutos(produtosData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;
