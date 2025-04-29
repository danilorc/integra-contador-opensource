import React, { useState } from 'react';
import api from '../api/api';

function ConsultaPage() {
  const [cnpj, setCnpj] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConsulta = async () => {
    setLoading(true);
    try {
      const payload = {
        contratante: { numero: cnpj, tipo: 2 },
        autorPedidoDados: { numero: cnpj, tipo: 2 },
        contribuinte: { numero: cnpj, tipo: 2 },
        pedidoDados: { idSistema: "PGDASD", idServico: "GERARDAS12", versaoSistema: "1.0", dados: "{}" }
      };
      const { data } = await api.post('/consultar', payload);
      setResultado(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao consultar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Consulta</h1>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        placeholder="Digite o CNPJ"
        value={cnpj}
        onChange={e => setCnpj(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={handleConsulta}
        disabled={loading}
      >
        {loading ? 'Consultando...' : 'Consultar'}
      </button>

      {resultado && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(resultado, null, 2)}</pre>
      )}
    </div>
  );
}

export default ConsultaPage;
