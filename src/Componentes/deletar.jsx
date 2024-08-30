import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [cpf, setCpf] = useState('');
  const [pessoa, setPessoa] = useState(null);
  const [error, setError] = useState(null);
  const [updateData, setUpdateData] = useState({
    nome: '',
    dataNasc: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    cidade: '',
    bairro: '',
    estado: ''
  });

  const handleDelete = async () => {
    try {
        const response = await axios.delete(`http://localhost:3000/cadastrarPessoa/${cpf}`);
        setError(null);
        alert('Pessoa desativada com sucesso');
        window.location.reload()
    } catch (error) {
        setError('Erro ao desativar pessoa');
    }
};

  return (
    <div>
      <h2>Digite o CPF que deseja excluir:</h2>
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite o CPF"/>
      <button onClick={handleDelete}>Desativar</button>
    </div>
  );
};

export default Delete;