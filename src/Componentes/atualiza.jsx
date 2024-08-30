import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Icons
import { VscAccount } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscLocation } from "react-icons/vsc";
import { VscCalendar } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc"; 
import { BsCloud } from "react-icons/bs";
import { FaTreeCity } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Atualiza = () => {
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

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cadastrarPessoa/${cpf}`);
      setPessoa(response.data);
      setError(null);

      const { id, ativo, ...filteredData } = response.data;
      setUpdateData(filteredData || {
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
    } catch (error) {
      setError('Pessoa não encontrada');
      setPessoa(null);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/cadastrarPessoa/${cpf}`, updateData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setError(null);
      alert('Dados atualizados com sucesso');
      window.location.reload()
    } catch (error) {
      setError('Erro ao atualizar dados');
    }
  };

  useEffect(() => {
    if (pessoa) {
      setUpdateData({
        nome: pessoa.nome_pessoa || '',
        dataNasc: pessoa.dataNasc_pessoa || '',
        telefone: pessoa.telefone_pessoa || '',
        email: pessoa.email_pessoa || '',
        cep: pessoa.cep_pessoa || '',
        logradouro: pessoa.logradouro_pessoa || '',
        cidade: pessoa.cidade_pessoa || '',
        bairro: pessoa.bairro_pessoa || '',
        estado: pessoa.estado_pessoa || ''
      });
    }
  }, [pessoa]);

  return (
    <div>
      <h2>Atualize seu cadastro:</h2>
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite o CPF"/>
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      {pessoa && (
        <div>
          <h2>Dados da Pessoa:</h2>
          <div>
            <label><VscAccount /> Nome: </label>
            <input
              type="text"
              value={updateData.nome}
              onChange={(e) => setUpdateData({ ...updateData, nome: e.target.value })}
            />
          </div>
          <div>
            <label><VscCalendar /> Data de Nascimento: </label>
            <input
              type="date"
              value={updateData.dataNasc}
              onChange={(e) => setUpdateData({ ...updateData, dataNasc: e.target.value })}
            />
          </div>
          <div>
            <label><MdOutlinePhoneAndroid /> Telefone: </label>
            <input
              type="text"
              value={updateData.telefone}
              onChange={(e) => setUpdateData({ ...updateData, telefone: e.target.value })}
            />
          </div>
          <div>
            <label><VscMail /> Email: </label>
            <input
              type="text"
              value={updateData.email}
              onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
            />
          </div>
          <div>
            <label><VscLocation /> CEP: </label>
            <input
              type="text"
              value={updateData.cep}
              onChange={(e) => setUpdateData({ ...updateData, cep: e.target.value })}
            />
          </div>
          <div>
            <label><BsCloud /> Logradouro: </label>
            <input
              type="text"
              value={updateData.logradouro}
              onChange={(e) => setUpdateData({ ...updateData, logradouro: e.target.value })}
            />
          </div>
          <div>
            <label><FaCity /> Cidade: </label>
            <input
              type="text"
              value={updateData.cidade}
              onChange={(e) => setUpdateData({ ...updateData, cidade: e.target.value })}
            />
          </div>
          <div>
            <label><FaTreeCity /> Bairro: </label>
            <input
              type="text"
              value={updateData.bairro}
              onChange={(e) => setUpdateData({ ...updateData, bairro: e.target.value })}
            />
          </div>
          <div>
            <label><MdRealEstateAgent /> Estado: </label>
            <input
              type="text"
              value={updateData.estado}
              onChange={(e) => setUpdateData({ ...updateData, estado: e.target.value })}
            />
          </div>
          <button onClick={handleUpdate}>Atualizar</button>
        </div>
      )}
    </div>
  );
};

export default Atualiza;
