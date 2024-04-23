import React from 'react';
import ListaProdutos from './ListaProdutos';
import remediosMock from '../../mocks/remediosMock';
function Produtos() {
  return (
    <>
      <div className="bg-gray-700 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Drugs N' Pills</h2>
            <p className='text-xl'>Farmácia</p>
            <ListaProdutos produtos={remediosMock} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Produtos;
