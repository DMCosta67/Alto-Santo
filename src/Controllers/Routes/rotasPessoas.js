import express from 'express';
import { createPessoa, getPessoas, getPessoaByCPF, updatePessoa, deletePessoa } from './pessoaController.js';

const router = express.Router();

// Rotas para CRUD de pessoas
router.post('/pessoas', createPessoa); 
router.get('/pessoas', getPessoas);
router.get('/pessoas/cpf/:cpf', getPessoaByCPF); 
router.put('/pessoas/:id', updatePessoa); 
router.delete('/pessoas/:id', deletePessoa); 

export default router;
