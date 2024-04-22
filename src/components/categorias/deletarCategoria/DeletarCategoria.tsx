import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();
    let navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const categoriaData = await buscar(`/categorias/${id}`, {}); // Remova setCategoria como segundo parâmetro
                setCategoria(categoriaData);
            } catch (error) {
                console.error('Erro ao buscar categoria:', error);
            }
        }

        fetchData();
    }, [id]);

    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {});
            alert('Categoria apagada com sucesso');
            retornar();
        } catch (error) {
            console.error('Erro ao apagar a Categoria:', error);
            alert('Erro ao apagar a Categoria');
        }
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>Sim</button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
