import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria'; // Substitui Tema por Categoria
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormularioProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]); // Substitui temas por categorias
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '' }); // Substitui tema por categoria
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    titulo: '',
    texto: '',
    data: '',
    categoria: null,
    foto: '',
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria); // Substitui temas por categorias
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias); // Substitui temas por categorias
  }

  useEffect(() => {
    buscarCategorias(); // Substitui buscarTemas por buscarCategorias
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria); // Substitui tema por categoria
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria, // Substitui tema por categoria
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria, // Substitui tema por categoria
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  
    console.log({ produto });
  
    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, {
          headers: {

          },
        });
        alert('Produto atualizado com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao atualizar o Produto');
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, {
          headers: {
          },
        });
        alert('Produto cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        alert('Erro ao cadastrar o Produto');
      }
    }
  }
  

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Titulo do produto</label>
          <input
            value={produto.titulo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Descrição do produto</label>
          <input
            value={produto.texto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="texto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria do produto</p>
          <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='rounded bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
