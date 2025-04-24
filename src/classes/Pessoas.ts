import Endereco from "./Endereco";
//Criar a classe pai(superclasse) chamanda Pessoa que passara todos os seus dados as classes filhas
/*
    A classe Pessoa segue o principio O(Open/Close) do solid,
    onde, temos a classe fechada para modificações e aberta para extensões.
    O qualificador abstract(abstrato) mantém a classe Pessoa, sempre abstrata,
    não permitindo que ela seja materializada, ou seja, não poderá ser uma instancia
*/
export default abstract class Pessoa{
    id!:number;
    nome!:string;
    cpf!:number;
    email!:string;
    telefone?:string;
    endereco!:Endereco;
}

