"use client";

import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Stack,
    Container,
} from "@mantine/core";

export default function CadastroPage() {
    return (
        <Container size={420} mt={80}>
            <Paper radius="md" p="xl" withBorder>
                <Title order={2} mb="lg" ta="center">
                    Criar conta
                </Title>

                <Stack>
                    <TextInput label="Nome" required />
                    <TextInput label="E-mail" required />
                    <PasswordInput label="Senha" required />

                    <Button fullWidth mt="md" color="green">
                        Cadastrar
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}
