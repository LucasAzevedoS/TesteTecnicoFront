"use client";

import {
    TextInput,
    Button,
    Stack,
    Select,
    NumberInput,
} from "@mantine/core";
import { useState, useEffect } from "react";

export default function TransacaoForm() {
    const API_URL = "https://localhost:7033/api";
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState<number | string>("");
    const [tipo, setTipo] = useState<string | null>(null);

    const [categorias, setCategorias] = useState<any[]>([]);
    const [pessoas, setPessoas] = useState<any[]>([]);

    const [categoriaId, setCategoriaId] = useState<string | null>(null);
    const [pessoaId, setPessoaId] = useState<string | null>(null);

    useEffect(() => {
        buscarCategorias();
        buscarPessoas();
    }, []);

    async function buscarCategorias() {
        const response = await fetch(`${API_URL}/selCategoria`);
        const data = await response.json();
        setCategorias(data);
    }

    async function buscarPessoas() {
        const response = await fetch(`${API_URL}/selPessoa`);
        const data = await response.json();
        setPessoas(data);
    }

    async function handleSubmit() {
        await fetch(`${API_URL}/incluiTransacao`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                descricao,
                valor,
                tipo,
                categoriaId: Number(categoriaId),
                pessoaId: Number(pessoaId),
            }),
        });

        alert("Transação criada com sucesso");
    }

    return (
        <Stack>
            <TextInput
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.currentTarget.value)}
            />

            <NumberInput
                label="Valor"
                value={valor}
                onChange={setValor}
            />

            <Select
                label="Tipo"
                data={[
                    { value: "RECEITA", label: "RECEITA" },
                    { value: "DESPESA", label: "DESPESA" },
                ]}
                value={tipo}
                onChange={setTipo}
            />

            <Select
                label="Pessoa"
                data={pessoas.map((p) => ({
                    value: p.id.toString(),
                    label: p.nome,
                }))}
                value={pessoaId}
                onChange={setPessoaId}
            />

            <Select
                label="Categoria"
                data={categorias.map((c) => ({
                    value: c.id.toString(),
                    label: c.descricao,
                }))}
                value={categoriaId}
                onChange={setCategoriaId}
            />

            <Button onClick={handleSubmit}>
                Salvar Transação
            </Button>
        </Stack>
    );
}
