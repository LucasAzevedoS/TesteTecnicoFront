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
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { login } from "../services/api";

export default function LoginPage() {
    const router = useRouter();

    const form = useForm({
        initialValues: {
            email: "",
            senha: "",
        },
    });

    const handleLogin = async (values: typeof form.values) => {
        try {
            const user = await login(values.email, values.senha);
            localStorage.setItem("usuario", JSON.stringify(user));
            notifications.show({
                title: "Sucesso",
                message: "Login realizado com sucesso!",
                color: "green",
            });

            router.push("/dashboard");
        } catch {
            notifications.show({
                title: "Erro",
                message: "Email ou senha inválidos",
                color: "red",
            });
        }
    };

    return (
        <Container size={420} mt={120}>
            <Paper radius="md" p="xl" withBorder>
                <Title order={2} mb="lg" ta="center">
                    Acessar sistema
                </Title>

                <form onSubmit={form.onSubmit(handleLogin)}>
                    <Stack>
                        <TextInput
                            label="E-mail"
                            placeholder="seu@email.com"
                            {...form.getInputProps("email")}
                        />

                        <PasswordInput
                            label="Senha"
                            placeholder="********"
                            {...form.getInputProps("senha")}
                        />

                        <Button type="submit" fullWidth mt="md" color="green">
                            Entrar
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    );
}
