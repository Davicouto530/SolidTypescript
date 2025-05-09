import { Request, Response } from "express";
import FuncionarioRepository from "../repositories/FuncionarioRepository";
import Funcionario from "../classes/Funcionario";

export default class FuncionarioService {
    funcRespository = new FuncionarioRepository();

    async listarFuncionarios(req:Request, res:Response){
        try {
            const rs = await this.funcRespository.Listar();
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}