"use client";

import { Card, Text, Group, Button } from "@mantine/core";

interface Props {
    pessoa: any;
    onDelete: (id: number) => void;
    onEdit: (pessoa: any) => void;
}

export default function PessoaCard({ pessoa, onDelete, onEdit }: Props) {
    return (
        <Card
            shadow="xs"
            padding="sm"
            radius="md"
            withBorder
            style={{
                maxWidth: 280,
            }}
        >
            <Group justify="space-between">
                <Text fw={500}>{pessoa.nome}</Text>
            </Group>

            <Group mt="sm" justify="space-between">
                <Button
                    size="xs"
                    variant="light"
                    onClick={() => onEdit(pessoa)}
                >
                    Editar
                </Button>

                <Button
                    size="xs"
                    color="red"
                    variant="light"
                    onClick={() => onDelete(pessoa.id)}
                >
                    Excluir
                </Button>
            </Group>
        </Card>
    );
}
