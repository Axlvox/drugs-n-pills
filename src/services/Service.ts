import axios from "axios";

const api = axios.create({
  baseURL: 'https://drugsnpills.onrender.com/'
})

export const buscar = async (url: string, header: Object) => {
  const resposta = await api.get(url, header)
  return resposta.data;
}

export const cadastrar = async (url: string, dados: Object, header: Object) => {
  const resposta = await api.post(url, dados, header)
  return resposta.data;
}

export const atualizar = async (url: string, dados: Object, header: Object) => {
  const resposta = await api.put(url, dados, header)
  return resposta.data;
}

export const deletar = async (url: string, header: Object) => {
  await api.delete(url, header)
}
