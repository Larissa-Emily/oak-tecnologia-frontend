import React, { useState, useEffect } from "react";
import { Container, Listing } from "./styled.js";
import { DataGrid } from "@mui/x-data-grid";

import Button from "../Register/index.js";

// Definindo as colunas da tabela
const columns = [
  { field: "id", headerName: "ID", width: 100 }, 
  { field: "nome", headerName: "Nome", width: 250 },
  { field: "descricao", headerName: "Descrição", width: 500 },
  {
    field: "preco",
    headerName: "Preço",
    width: 150,
    type: "number",
    align: "left",
    headerAlign: 'left' 
  },
  { field: "disponivel", headerName: "Disponível", width: 120 },
];

export default function List() {
  const [data, setData] = useState([]); // Estado para armazenar os dados
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar os dados da API
  const fetchData = async () => {
    try {
      const response = await fetch("https://oak-tecnologia-backend.vercel.app/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const result = await response.json();

      // Transformando os dados para garantir compatibilidade com as colunas
      const formattedData = result.map((item) => ({
        id: item.id, // ID do produto
        nome: item.name, // Nome do produto
        descricao: item.description, // Descrição do produto
        preco: parseFloat(item.price).toFixed(2), // Preço formatado com duas casas decimais
        disponivel: item.available ? "Sim" : "Não", // Disponibilidade
      }));

      setData(formattedData); // Atualizando o estado com os dados formatados
    } catch (error) {
      setError(error.message); // Capturando e mostrando o erro
    }
  };

  useEffect(() => {
    // Busca inicial
    fetchData();

    // Atualizar dados a cada 5 segundos
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
      {/* Exibir erro se existir */}
      <div style={{ height: 500, width: "80%", margin: "0 auto" }}>
        <Listing>
          <h1>Listagem de Produtos</h1>
          <Button /> {/* Botão para adicionar novo produto */}
        </Listing>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          labelRowsPerPage="Linhas por página" // Traduzido para português
          localeText={{
            toolbarDensity: "Densidade", // Traduzido para português
            toolbarDensityLabel: "Densidade",
            toolbarDensityCompact: "Compacto",
            toolbarDensityStandard: "Padrão",
            toolbarDensityComfortable: "Confortável",
            footerRowSelected: (count) => `${count} linha(s) selecionada(s)`,
            // Adicionando mais traduções
            noRowsLabel: "Nenhuma linha encontrada",
            errorOverlayDefaultLabel: "Ocorreu um erro",
            // E assim por diante, conforme necessário
          }}
        />
      </div>
    </Container>
  );
}
