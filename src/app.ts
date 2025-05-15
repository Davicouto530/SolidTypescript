import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import AutorService from "./services/AutorService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";

const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const autor = new AutorService();
const func = new FuncionarioService();
const prod = new ProdutoService();
const ven = new VendaService();

///----------------Cliente-----------------------

app.use("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});             

app.post("/api/v1/cliente/cadastro", (req, res) => {
    console.log(req.body)
    cli.cadastroCliente(req, res);
});
//------------------------------------------------

///----------------Autor-----------------------

app.use("/api/v1/autor/listar", (req, res) => {
    autor.listarAutor(req, res);
});

app.use("/api/v1/autor/cadastro", (req, res) => {
    autor.cadastroAutor(req, res);
});
//------------------------------------------------

///----------------Funcionario-----------------------

app.use("/api/v1/funcionario/listar", (req, res) => {
    func.listarFuncionarios(req, res);
});

app.use("/api/v1/funcionario/cadastro", (req, res) => {
    func.cadastroFuncionario(req, res);
});
//------------------------------------------------

///----------------Produto-----------------------

app.use("/api/v1/produto/listar", (req, res) => {
    prod.listarProdutos(req, res);
});

app.use("/api/v1/produto/cadastro", (req, res) => {
    prod.cadastroProduto(req, res);
});
//------------------------------------------------

///----------------Venda-----------------------

app.use("/api/v1/venda/listar", (req, res) => {
    ven.listarVendas(req, res);
});

app.use("/api/v1/venda/cadastro", (req, res) => {
    ven.cadastroVenda(req, res);
});
//------------------------------------------------

app.listen(5000, () => {
    console.log("Online em: http://127.0.0.1:5000");
});

///