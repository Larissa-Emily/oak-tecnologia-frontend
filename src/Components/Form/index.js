import { Container } from "./styled.js";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Form({ handleClose }) {
  // Recebe handleClose como prop
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      description: desc,
      price,
      available: available === "1",
    };

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        toast.success("Produto cadastrado com sucesso!");
        setName("");
        setDesc("");
        setPrice("");
        setAvailable("");
        handleClose(); // Fecha o modal após o sucesso
      } else {
        toast.error("Erro ao cadastrar o produto.");
      }
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro de conexão com o servidor.");
    }
  };

  return (
    <Container>
      <h3>Novo Produto</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do produto:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          placeholder="Video Maker"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="desc">Descrição do produto:</label>
        <input
          id="desc"
          name="desc"
          required
          placeholder="A ferramenta de edição de vídeo mais fácil para fazer vídeos estilosos."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="preco">Preço:</label>
        <input
          type="number"
          id="preco"
          name="preco"
          step="0.01"
          required
          placeholder="00.00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="disponivel">Disponível para venda:</label>
        <br />
        <select
          id="disponivel"
          name="disponivel"
          required
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        >
          <option value="1">Sim</option>
          <option value="0">Não</option>
        </select>

        <div className="buttons">
          <button type="submit" className="submit">
            Cadastrar
          </button>
          <button
            type="reset"
            onClick={() => {
              setName("");
              setDesc("");
              setPrice("");
              setAvailable("");
            }}
          >
            Limpar
          </button>
        </div>
      </form>
    </Container>
  );
}
