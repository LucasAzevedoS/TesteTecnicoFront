"use client";

import { Tabs, Card } from "@mantine/core";
import CategoriaForm from "../components/Forms/CategoriaForm";
import TransacaoForm from "../components/Forms/TransacaoForm";
import AppLayout from "../components/Layout/AppLayout";


export default function CadastrosPage() {
    return (
        <AppLayout>
            <Card shadow="sm" padding="lg" radius="md">
                <Tabs defaultValue="categoria">
                    <Tabs.List>
                        <Tabs.Tab value="categoria">Categoria</Tabs.Tab>
                        <Tabs.Tab value="transacao">Transação</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="categoria" pt="md">
                        <CategoriaForm />
                    </Tabs.Panel>

                    <Tabs.Panel value="transacao" pt="md">
                        <TransacaoForm />
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </AppLayout>
    );
}
