import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";

const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const func = new FuncionarioService();
const autor = new AutorService();

app.use("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});

app.use("/api/v1/funcionario/listar", (req, res) => {
    func.listarFuncionarios(req, res);
});

app.use("/api/v1/autor/listar", (req, res) => {
    autor.listarAutor(req, res);
});

app.post("/api/v1/cliente/cadastro", (req, res) => {
    cli.cadastroCliente(req, res);
});

app.listen(5000, () => {
    console.log("Online em: http://127.0.0.1:5000");
});