import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between bg-slate-200'>
      <header className='py-2 px-6 bg-gray-500 text-white font-bold text-2xl'>
        {produto.titulo}
      </header>
  
      <img src={produto.foto} className='plant h-12 rounded-full' alt="" />
      
      <div className='p-4 '>
        <h4 className='text-lg font-semibold uppercase'></h4>
        <p>{produto.texto}</p>
        <img src={produto.imagemUrl} alt="" />
        <p className='font-semibold'>Categoria:</p>
        <p>{produto.categoria.descricao}</p>
        <p className='font-semibold'>Data:</p>
        <p>{new Intl.DateTimeFormat(undefined, {
          dateStyle: 'full',
          timeStyle: 'medium',
        }).format(new Date(produto.data))}</p>
      </div>
      <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className='w-full text-slate-100 bg-gray-700 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
