import Produto from "../classes/Produto";
import { conexao } from "../database/Config";
import Commands from "../Interfaces/Commands";

export default class ProdutoRepository implements Commands<Produto> {
    Cadastrar(obj: Produto): Promise<Produto> {
        return new Promise((resolve, reject) => {
            conexao.query("INSERT INTO produto(nome, descricao, preco) Values (?,?,?)", [
                obj.nome,
                obj.descricao,
                obj.preco],
                (erro, end: any) => {

                    if (erro) {
                        return reject(erro);
                    } else {
                        return resolve(obj);
                    }
                });
        })
    }
    Listar(): Promise<Produto[]> {
        return new Promise((resolve,reject) => {
            conexao.query("Select * from produto", (erro,result) => {
                if(erro){
                    return reject(erro)
                }else {
                    return resolve(result as Produto[]);
                }
            });
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }

}