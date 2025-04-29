import React, { useState } from 'react';
import api from '../api/api';

function EmitirPage() {
  const [dados, setDados] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmitir = async () => {
    setLoading(true);
    try {
      const payload = {
        pedidoDados: {
          idSistema: "PGDASD",
          idServico: "GERARDAS12",
          versaoSistema: "1.0",
          dados: dados
        }
      };
      const { data } = await api.post('/emitir', payload);
      setResultado(data);
    } catch (error) {
      console.error(error);
      alert('Erro ao emitir documento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Emissão</h1>
      <textarea
        className="border p-2 w-full mb-4 h-40"
        placeholder="Cole os dados em JSON"
        value={dados}
        onChange={e => setDados(e.target.value)}
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={handleEmitir}
        disabled={loading}
      >
        {loading ? 'Emitindo...' : 'Emitir Documento'}
      </button>

      {resultado
