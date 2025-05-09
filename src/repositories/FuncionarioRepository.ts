import Funcionario from "../classes/Funcionario";
import { conexao } from "../database/Config";
import CommandsPessoa from "../Interfaces/CommandsPessoa";

export default class FuncionarioRepository implements CommandsPessoa<Funcionario> {
    PesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Funcionario[]> {
        return new Promise((resolve,reject) => {
            conexao.query("Select * from funcionario", (erro,result) => {
                if(erro){
                    return reject(erro)
                }else {
                    return resolve(result as Funcionario[]);
                }
            });
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atulizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
}