import { Request, Response } from "express";
import FuncionarioRepository from "../repositories/FuncionarioRepository";
import Funcionario from "../classes/Funcionario";

export default class FuncionarioService {
    funcRespository = new FuncionarioRepository();
    
    async cadastroFuncionario(req:Request, res:Response){
        const func:Funcionario = new Funcionario();
        func.nome = req.body.nome;
        func.email = req.body.email;
        func.cpf = req.body.cpf;
        func.telefone = req.body.telefone;
        func.cargo = req.body.cargo;
        func.salario = req.body.salario;
        func.endereco = req.body.endereco;
        try {
            const rs = await this.funcRespository.Cadastrar(func);
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async listarFuncionarios(req:Request, res:Response){
        try {
            const rs = await this.funcRespository.Listar();
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}