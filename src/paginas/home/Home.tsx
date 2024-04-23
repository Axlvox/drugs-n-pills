import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaProdutos from '../../components/produtos/listaProdutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import remediosMock from '../../components/mocks/remediosMock';
<img src='https://i.imgur.com/J4zdmqS.png' alt="" className='w-full h-auto' />

function Home() {
    return (
        <>
        <div className="card glass flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
          
              <h2 className='text-5xl font-bold'>Drugs N' Pills</h2>
              <p className='text-xl'>Farmácia</p>
  
              <div className="flex justify-around gap-4">
              <ModalProduto />
              <Link to="/produtos" className='rounded bg-white text-blue-800 py-2 px-4'>Ver produtos</Link>
              </div>
            </div>
            <div className="flex justify-center ">
            <div className="w-1/2 h-full flex justify-center items-end">
            <img src={homeLogo} alt="" className='w-4/4' /> 
</div>
            </div>
          </div>
        </div>
        <ListaProdutos produtos={remediosMock} />
      </>
    );
}

export default Home;