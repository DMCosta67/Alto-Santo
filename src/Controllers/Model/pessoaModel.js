import connection from "../../BD/db";

export function getPessoaByCPF(cpf, callback) {
    const sql = 'SELECT * FROM pessoa_dados WHERE cpf_pessoa = ? AND ativo_pessoa = 1';
    connection.query(sql, [cpf], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results[0]);
        }
    });
}

/*
export function read(callback) {
    connection.query('SELECT * FROM pessoa_dados', callback);
}
*/
export function create(nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado, callback) {
    connection.query('INSERT INTO pessoa_dados (nome_pessoa, cpf_pessoa, dataNasc_pessoa, telefone_pessoa, email_pessoa, cep_pessoa, logradouro_pessoa, cidade_pessoa, bairro_pessoa, estado_pessoa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado], callback);
}

export function update(id, novoDados_pessoa, callback) {
    connection.query('UPDATE pessoa_dados SET ? WHERE id = ?', [novoDados_pessoa, id], callback);
}

export function deletePes(id, callback) {
    connection.query('UPDATE pessoa_dados SET ativo_pessoa = 0 WHERE id = ?', [id], callback);
}
