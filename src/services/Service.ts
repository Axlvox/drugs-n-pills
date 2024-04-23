import remediosMock from '../components/mocks/remediosMock';

const usarMocks = true;

export const buscar = async (url: string, header: Object) => {
  if (usarMocks) {
    return remediosMock;
  } else {
    throw new Error('Requisição para API não suportada quando usar mocks.');
  }
}
