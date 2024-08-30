import express from "express";
import cors from "cors";
import connection from './db.js';

const app = express();

app.use(express.json());
app.use(cors());

// Adicionar no BD
app.post('/cadastrarPessoa', async (req, res) => {
    const { nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado } = req.body;

    console.log("Dados recebidos", { nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado });

    const sql = "INSERT INTO pessoa_dados (nome_pessoa, cpf_pessoa, dataNasc_pessoa, telefone_pessoa, email_pessoa, cep_pessoa, logradouro_pessoa, cidade_pessoa, bairro_pessoa, estado_pessoa, ativo_pessoa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)";
    
    connection.query(sql, [nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado], (error, results, fields) => {
        if (error) {
            console.error("Erro ao inserir dados", error);
            res.status(500).json({ error: 'Erro ao inserir dados' });
        } else {
            console.log('Dados inseridos com sucesso');
            res.status(200).json({ message: 'Dados inseridos com sucesso' });
        }
    });
});

// Leitura do BD
app.get('/cadastrarPessoa/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    const sql = "SELECT * FROM pessoa_dados WHERE cpf_pessoa = ? AND ativo_pessoa = 1";
    
    connection.query(sql, [cpf], (error, results, fields) => {
        if (error) {
            console.error("Erro ao ler dados", error);
            res.status(500).json({ error: 'Erro ao ler dados' });
        } else {
            if (results.length > 0) {
                console.log('Dados pegos com sucesso');
                res.status(200).json(results[0]);
            } else {
                res.status(404).json({ error: 'Pessoa não encontrada' });
            }
        }
    });
});

// Atualizar dados de pessoa
app.put('/cadastrarPessoa/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    const { nome, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado } = req.body;

    const sql = `UPDATE pessoa_dados SET nome_pessoa = ?, dataNasc_pessoa = ?, telefone_pessoa = ?, email_pessoa = ?, cep_pessoa = ?, logradouro_pessoa = ?, cidade_pessoa = ?, bairro_pessoa = ?, estado_pessoa = ? WHERE cpf_pessoa = ?`;

    connection.query(sql, [nome, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado, cpf], (error, results, fields) => {
        if (error) {
            console.error("Erro ao atualizar dados", error);
            res.status(500).json({ error: 'Erro ao atualizar dados' });
        } else {
            if (results.affectedRows > 0) {
                console.log('Dados atualizados com sucesso');
                res.status(200).json({ message: 'Dados atualizados com sucesso' });
            } else {
                res.status(404).json({ error: 'Pessoa não encontrada' });
            }
        }
    });
});


// Atualizar o campo ativo_pessoa para 0
app.delete('/cadastrarPessoa/:cpf', async (req, res) => {
    const cpf = req.params.cpf;
    
    const sql = `UPDATE pessoa_dados SET ativo_pessoa = 0 WHERE cpf_pessoa = ?`;

    connection.query(sql, [cpf], (error, results, fields) => {
        if (error) {
            console.error("Erro ao desativar pessoa", error);
            res.status(500).json({ error: 'Erro ao desativar pessoa' });
        } else {
            if (results.affectedRows > 0) {
                console.log('Pessoa desativada com sucesso');
                res.status(200).json({ message: 'Pessoa desativada com sucesso' });
            } else {
                res.status(404).json({ error: 'Pessoa não encontrada' });
            }
        }
    });
});

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});
