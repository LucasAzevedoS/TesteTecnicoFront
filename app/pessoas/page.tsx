'use client'

import { useState, useEffect } from "react";
import AppLayout from "../components/Layout/AppLayout";
import PessoaForm from "../components/Forms/PessoaForm";
import PessoaCard from "../components/PessoaCard";

export default function PessoasPage() {

    const API_URL = "https://localhost:7033/api";
    const [pessoas, setPessoas] = useState<any[]>([]);

    async function buscaPessoas() {
        const response = await fetch(`${API_URL}/selPessoa`);
        const data = await response.json();
        setPessoas(data);
    }

    useEffect(() => {
        buscaPessoas();
    }, []);

    async function handleDelete(id: number) {
        await fetch(`${API_URL}/excluiPessoa/${id}`, {
            method: "DELETE",
        });

        buscaPessoas();
    }

    function handleEdit(pessoa: any) {
        console.log("Editar", pessoa);
    }

    return (
        <AppLayout>
            <PessoaForm />

            <h2 style={{ marginTop: 20 }}>Pessoas</h2>

            <div style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginTop: 16
            }}>
                {pessoas.map((p) => (
                    <PessoaCard
                        key={p.id}
                        pessoa={p}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </AppLayout>
    );
}
