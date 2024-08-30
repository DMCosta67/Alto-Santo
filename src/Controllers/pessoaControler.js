import { create_pessoa, read_pessoa, update_pessoa, deletePes_pessoa, getPessoaByCPF } from './pessoaModel.js';


// Realizando INSERT (CREATE)
export async function createPessoa(req, res) {
    const { nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado} = req.body;
    
    const nome_pessoa = nome;
    const cpf_pessoa = cpf;
    const dataNasc_pessoa = dataNasc;
    const telefone_pessoa = telefone;
    const email_pessoa = email;
    const cep_pessoa = cep;
    const logradouro_pessoa = logradouro;
    const cidade_pessoa = cidade;
    const bairro_pessoa = bairro;
    const estado_pessoa = estado;

    console.log("Dados recebidos do frontend:", { nome_pessoa, cpf_pessoa, dataNasc_pessoa, telefone_pessoa, email_pessoa, cep_pessoa, logradouro_pessoa, cidade_pessoa, bairro_pessoa, estado_pessoa });

    create_pessoa(nome_pessoa, cpf_pessoa, dataNasc_pessoa, telefone_pessoa, email_pessoa, cep_pessoa, logradouro_pessoa, cidade_pessoa, bairro_pessoa, estado_pessoa, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Pessoa criada com sucesso' });
    });
}

// Realizando CONSULTA (READ) de todas as pessoas
export async function getPessoas(req, res) {
    read_pessoa((err, pessoas) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoas);
    });
}

// Realizando CONSULTA (READ) de pessoa por CPF
export async function getPessoaByCPF(req, res) {
    const { cpf } = req.params;

    getPessoaByCPF(cpf, (err, pessoa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!pessoa) {
            res.status(404).json({ error: 'Pessoa não encontrada' });
            return;
        }
        res.json(pessoa);
    });
}

// Realizando ATUALIZAÇÃO (UPDATE)
export async function updatePessoa(req, res) {
    const { id } = req.params;
    const novosDados_pessoa = req.body;
    update_pessoa(id, novosDados_pessoa, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa atualizada com sucesso');
    });
}

// Realizando DELETE
export async function deletePessoa(req, res) {
    const { id } = req.params;
    deletePes_pessoa(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa excluída com sucesso');
    });
}
