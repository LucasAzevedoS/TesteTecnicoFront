"use client";

import { TextInput, Button, Stack, Select } from "@mantine/core";
import { useState } from "react";

export default function CategoriaForm() {
    const [descricao, setDescricao] = useState("");
    const [finalidade, setFinalidade] = useState<string | null>(null);

    const API_URL = "https://localhost:7033/api";

    async function handleSubmit() {
        await fetch(`${API_URL}/incluiCategoria`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                descricao,
                finalidade,
            }),
        });

        setDescricao("");
        setFinalidade(null);

        alert("Categoria criada com sucesso");
    }

    return (
        <Stack>
            <TextInput
                label="Descrição da Categoria"
                value={descricao}
                onChange={(e) => setDescricao(e.currentTarget.value)}
            />

            <Select
                label="Finalidade"
                data={[
                    { value: "RECEITA", label: "RECEITA" },
                    { value: "DESPESA", label: "DESPESA" },
                ]}
                value={finalidade}
                onChange={setFinalidade}
            />

            <Button onClick={handleSubmit}>
                Salvar Categoria
            </Button>
        </Stack>
    );
}
