class CadastroPessoa {
    constructor(nome, cpf, dataNasc, telefone, email, cep, logradouro, cidade, bairro, estado) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.telefone = telefone;
        this.email = email;
        this.cep = cep;
        this.logradouro = logradouro;
        this.cidade = cidade;
        this.bairro = bairro;
        this.estado = estado;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(novoCPF) {
        this._cpf = novoCPF;
    }

    get dataNasc() {
        return this._dataNasc;
    }

    set dataNasc(novoDataNasc) {
        this._dataNasc = novoDataNasc;
    }

    get telefone() {
        return this._telefone;
    }

    set telefone(novoTelefone) {
        this._telefone = novoTelefone;
    }

    get email() {
        return this._email;
    }

    set email(novoEmail) {
        this._email = novoEmail;
    }

    get cep() {
        return this._cep;
    }

    set cep(novoCep) {
        this._cep = novoCep;
    }

    get logradouro() {
        return this._logradouro;
    }

    set logradouro(novoLogradouro) {
        this._logradouro = novoLogradouro;
    }

    get cidade() {
        return this._cidade;
    }

    set cidade(novoCidade) {
        this._cidade = novoCidade;
    }

    get bairro() {
        return this._bairro;
    }

    set bairro(novoBairro) {
        this._bairro = novoBairro;
    }

    get estado() {
        return this._estado;
    }

    set estado(novoEstado) {
        this._estado = novoEstado;
    }
}

export default CadastroPessoa;
