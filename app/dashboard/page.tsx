'use client'


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Text } from "@mantine/core";
import { getUsuario } from "../services/auth";
import AppLayout from "../components/Layout/AppLayout";
import TransacaoCard from "../components/transacaoCard";

export default function DashboardPage() {
    const API_URL = "https://localhost:7033/api";
    const [transacoes, setTransacoes] = useState<any[]>([]);
    async function buscaTransacao() {
        const response = await fetch(`${API_URL}/selTransacao`);
        const data = await response.json();
        setTransacoes(data);
    }
    async function handleDelete(id: number) {
        await fetch(`${API_URL}/excluiTransacao/${id}`, {
            method: "DELETE",
        });

        buscaTransacao();
    }


    function handleEdit(transacao: any) {
        console.log("Editar", transacao);

    }

    const router = useRouter();

    useEffect(() => {
        const user = getUsuario();

        if (!user) {
            router.push("/login");
        } else {
            buscaTransacao();
        }
    }, []);


    return (
        <AppLayout>
            <Text mb="md">Seja Bem vindo {getUsuario()?.nome}!</Text>
            {transacoes.map((t) => (
                <TransacaoCard
                    key={t.id}
                    transacao={t}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}

        </AppLayout>

    );
}
