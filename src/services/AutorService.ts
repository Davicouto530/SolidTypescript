import AutorRepository from "../repositories/AutorRepository";
import { Request, Response } from "express";
import Autor from "../classes/Autor";

export default class AutorService {
    autorRepository = new AutorRepository();

    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.autorRepository.Listar();
            return res.status(200).json(rs)
        } catch (erro) {
            return res.status(500).json(erro)
        }
    }
}