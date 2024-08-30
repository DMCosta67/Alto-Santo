import connection from './db';

class Pessoa {
    static read(callback) {
        connection.query('SELECT * FROM pessoas_dados', callback);
    }
    
    static create(novaPessoa, callback) {
        connection.query('INSERT INTO pessoa_dados SET ?', novaPessoa, callback);
    }
    
    static update(id, novosDados, callback) {
        connection.query('UPDATE pessoa_dados SET ? WHERE id = ?', [novosDados, id], callback);
    }
    
    static delete(id, callback) {
        connection.query('DELETE FROM pessoa_dados WHERE id = ?', [id], callback);
    }
}

export default Pessoa;

