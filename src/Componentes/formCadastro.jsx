import { useState } from "react";
import '../CSS/Form.css'
 
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


function FormCadastro (){
    const [formValores, setFormValores] = useState({
        nome: '',
        cpf: '',
        dataNasc: '',
        telefone: '',
        email: '',
        cep: '',
        logradouro: '',
        cidade: '',
        bairro: '',
        estado: '',
        ativo: ''
      });
    
      const [endereco, setEndereco] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValores(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const buscaCep = async () => {
        const response = await fetch(`https://viacep.com.br/ws/${formValores.cep}/json`);
        const data = await response.json();
        setEndereco(data);
    
        setFormValores(prevState => ({
          ...prevState,
          logradouro: data.logradouro,
          cidade: data.localidade,
          bairro: data.bairro,
          estado: data.uf
        }));
      };
    
      const handleCSubmit = async (e) => {
        e.preventDefault();
    
        try {
          console.log("Dados a serem enviados: ", formValores);
          const response = await fetch('http://localhost:3000/cadastrarPessoa', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValores)
          });
    
          const json = await response.json();
          console.log(response);
          console.log(json);
          alert('Pessoa cadastrada com sucesso');
          window.location.reload()
    
        } catch (err) {
          console.error("Erro ao enviar", err);
        }
      };
    
      return (
        <form onSubmit={handleCSubmit}>
          <div className='cima'>Formulário de Cadastro:</div>
          <div className='cadas'>
          <VscAccount /> Nome:
          <input type='text' name="nome" value={formValores.nome} onChange={handleChange} required/>
          <br />
          <VscDiffAdded /> CPF:
          <input type='text' name="cpf" value={formValores.cpf} onChange={handleChange} required/>
          <br />
          <VscCalendar /> Data de Nascimento:
          <input type='date' name="dataNasc" value={formValores.dataNasc} onChange={handleChange} required/>
          <br />
          <MdOutlinePhoneAndroid /> Telefone:
          <input type='text' name="telefone" value={formValores.telefone} onChange={handleChange} required/>
          <br />
          <VscMail /> E-mail:
          <input type='text' name="email" value={formValores.email} onChange={handleChange} required/>
          <br />
          <VscLocation /> CEP:
          <input type='text' name="cep" value={formValores.cep} onChange={handleChange} required/>
          <br />
          <button type="button" onClick={buscaCep}>Buscar CEP</button>
    
          {endereco && (
            <>
              <BsCloud /> Logradouro:
              <input type='text' name="logradouro" value={formValores.logradouro} onChange={handleChange} required/>
              <br />
              <FaCity /> Cidade:
              <input type='text' name="cidade" value={formValores.cidade} onChange={handleChange} required/>
              <br />
              <FaTreeCity /> Bairro:
              <input type='text' name="bairro" value={formValores.bairro} onChange={handleChange} required/>
              <br />
              <MdRealEstateAgent /> Estado:
              <input type='text' name="estado" value={formValores.estado} onChange={handleChange} required/>
              <br />
              <button type="submit">Cadastrar</button>
            </>
          )}
          </div>
        </form>
      );
    }
export default FormCadastro;