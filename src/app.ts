import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";

const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const autor = new AutorService();
const func = new FuncionarioService();

///----------------Cliente-----------------------

app.use("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});             

app.post("/api/v1/cliente/cadastro", (req, res) => {
    console.log(req.body)
    cli.cadastroCliente(req, res);
});

///----------------Autor-----------------------

app.use("/api/v1/autor/listar", (req, res) => {
    autor.listarAutor(req, res);
});

app.use("/api/v1/autor/cadastro", (req, res) => {
    autor.cadastroAutor(req, res);
});

///----------------Funcionario-----------------------

app.use("/api/v1/funcionario/listar", (req, res) => {
    func.listarFuncionarios(req, res);
});

app.use("/api/v1/funcionario/cadastro", (req, res) => {
    func.cadastroFuncionario(req, res);
});

app.listen(5000, () => {
    console.log("Online em: http://127.0.0.1:5000");
});

///