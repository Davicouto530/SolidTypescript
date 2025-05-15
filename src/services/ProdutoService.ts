import { Request, Response } from "express";
import ProdutoRepository from "../repositories/ProdutoRepository";
import Produto from "../classes/Produto";

export default class ProdutoService {
    prodRespository = new ProdutoRepository();

    async cadastroProduto(req:Request, res:Response){
        const prod:Produto = new Produto();
        prod.nome = req.body.nome;
        prod.descricao = req.body.descricao;
        prod.preco = req.body.preco;
        try {
            const rs = await this.prodRespository.Cadastrar(prod);
            return res.status(201).json(rs);
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async listarProdutos(req:Request, res:Response){
        try {
            const rs = await this.prodRespository.Listar();
            return res.status(200).json(rs)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}