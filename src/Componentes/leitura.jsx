import React, { useState } from 'react';
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



const Leitura = () => {
  const [cpf, setCpf] = useState('');
  const [pessoa, setPessoa] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cadastrarPessoa/${cpf}`);
      setPessoa(response.data);
      setError(null);
    } catch (error) {
      setError('Pessoa não encontrada');
      setPessoa(null);
    }
  };

  return (
    <div>
      <h2>Consulte seu cadastro:</h2>
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite o CPF"/>
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      {pessoa && (
        <div>
          <h2>Dados da Pessoa:</h2>
          <p><VscAccount /> Nome: {pessoa.nome_pessoa}</p>
          <p><VscDiffAdded /> CPF: {pessoa.cpf_pessoa}</p>
          <p><VscCalendar /> Data de Nascimento: {pessoa.dataNasc_pessoa}</p>
          <p><MdOutlinePhoneAndroid /> Telefone: {pessoa.telefone_pessoa}</p>
          <p><VscMail /> E-mail: {pessoa.email_pessoa}</p>
          <p><VscLocation /> CEP: {pessoa.cep_pessoa}</p>
          <p><BsCloud /> Logradouro: {pessoa.logradouro_pessoa}</p>
          <p><FaCity /> Cidade: {pessoa.cidade_pessoa}</p>
          <p><FaTreeCity /> Bairro: {pessoa.bairro_pessoa}</p>
          <p><MdRealEstateAgent /> Estado: {pessoa.estado_pessoa}</p>
        </div>
      )}
    </div>
  );
};

export default Leitura;
