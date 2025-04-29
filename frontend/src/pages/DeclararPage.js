import React, { useState } from 'react';
import api from '../api/api';

function DeclararPage() {
  const [dados, setDados] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDeclarar = async () => {
    setLoading(true);
    try {
      const payload = {
        pedidoDados: {
          idSistema: "DEFIS",
          idServico: "ENTREGARDEFIS12",
          versaoSistema: "1.0",
          dados: dados
        }
      };
      const { data } = await api.post('/declarar', payload);
      setResultado(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao declarar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Declaração</h1>
      <textarea
        className="border p-2 w-full mb-4 h-40"
        placeholder="Cole os dados da declaração em JSON"
        value={dados}
        onChange={e => setDados(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        onClick={handleDeclarar}
        disabled={loading}
      >
        {loading ? 'Declarando...' : 'Enviar Declaração'}
      </button>

      {resultado && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify(resultado, null, 2)}</pre>
      )}
    </div>
  );
}

export default DeclararPage;
