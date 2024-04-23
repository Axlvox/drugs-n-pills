import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home.png';

function Navbar() {
  return (
    <div className='w-full bg-yellow-400 text-white flex justify-center py-4'>
      <div className="container flex items-center justify-between text-lg ml-4 mr-4">
        <Link to='/home' className='text-2xl font-bold uppercase flex items-center'>
          <img src={homeLogo} alt="Logo" className='h-auto mr-2 w-8' /> 
          Farmácia Drugs N' Pills
        </Link>

        <div className='flex gap-10 text-black font-bold' >
          <Link to='/produtos' className='hover:underline'>Produtos</Link>
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
          <Link to='/home/' className='hover:underline'>Sair</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
