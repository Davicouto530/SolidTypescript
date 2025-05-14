import AutorRepository from "../repositories/AutorRepository";
import { Request, Response } from "express";
import Autor from "../classes/Autor";

export default class AutorService {
    autorRepository = new AutorRepository();
    
    async cadastroAutor(req:Request, res:Response){
        const autor:Autor = new Autor();
        autor.nome = req.body.nome;
        autor.email = req.body.email;
        autor.cpf = req.body.cpf;
        autor.telefone = req.body.telefone;
        autor.genero_literario = req.body.genero_literario;
        autor.endereco = req.body.endereco;
        try {
            const rs = await this.autorRepository.Cadastrar(autor);
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.autorRepository.Listar();
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}