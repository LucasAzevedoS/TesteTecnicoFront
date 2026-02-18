const API_URL = "https://localhost:7033/api";

export async function login(email: string, senha: string) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            senha,
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao fazer login");
    }

    return response.json();
}
