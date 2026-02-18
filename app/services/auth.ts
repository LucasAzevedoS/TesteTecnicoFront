export function logout() {
    localStorage.removeItem("usuario");
    window.location.href = "/login";
}

export function getUsuario() {
    const user = localStorage.getItem("usuario");
    return user ? JSON.parse(user) : null;
}
