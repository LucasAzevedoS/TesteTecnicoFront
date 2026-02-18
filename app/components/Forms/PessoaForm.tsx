'use client'

import { useState, useEffect } from "react";

export default function PessoaForm() {
    const API_URL = "https://localhost:7033/api";
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState<number | string>("");

    async function handleSubmit() {
        await fetch(`${API_URL}/incluiPessoa`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nome,
                idade,
            }),
        });
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
            />
            <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}
                placeholder="Idade"
            />
            <button type="submit">Incluir Pessoa</button>
        </form>
    );
}
