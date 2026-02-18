"use client";

import { Card, Text, Group, Button, Badge } from "@mantine/core";

interface Props {
    transacao: any;
    onDelete: (id: number) => void;
    onEdit: (transacao: any) => void;
}

export default function TransacaoCard({
    transacao,
    onDelete,
    onEdit,
}: Props) {
    const isEntrada = transacao.tipo === "Entrada";

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
                borderLeft: `5px solid ${isEntrada ? "#2f9e44" : "#e03131"}`,
            }}
        >
            <Group justify="space-between" mb="xs">
                <Text fw={600}>{transacao.descricao}</Text>

                <Badge color={isEntrada ? "green" : "red"}>
                    {transacao.tipo}
                </Badge>
            </Group>

            <Text size="sm" c="dimmed">
                Pessoa: {transacao.nomePessoa}
            </Text>

            <Text
                size="lg"
                fw={700}
                mt="sm"
                c={isEntrada ? "green" : "red"}
            >
                R$ {transacao.valor}
            </Text>

            <Group mt="md">
                <Button size="xs" variant="light" onClick={() => onEdit(transacao)}>
                    Editar
                </Button>

                <Button
                    size="xs"
                    color="red"
                    variant="light"
                    onClick={() => onDelete(transacao.id)}
                >
                    Excluir
                </Button>
            </Group>
        </Card>
    );
}
