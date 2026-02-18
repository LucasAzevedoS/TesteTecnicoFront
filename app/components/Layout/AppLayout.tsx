"use client";

import { logout } from "@/app/services/auth";
// import { logout } from "@/app/services/auth";
import { AppShell, NavLink, Button } from "@mantine/core";
import { useRouter } from "next/navigation";


export default function AppLayout({ children }: any) {
    const router = useRouter();

    return (
        <AppShell
            padding="md"
            navbar={{
                width: 220,
                breakpoint: "sm",
            }}
        >
            <AppShell.Navbar p="md">
                <NavLink label="Dashboard" onClick={() => router.push("/dashboard")} />
                <NavLink label="Pessoas" onClick={() => router.push("/pessoas")} />
                <NavLink label="Transações" onClick={() => router.push("/transacoes")} />
                <Button
                    color="red"
                    mt="xl"
                    onClick={() => {
                        logout();
                        router.push("/login");
                    }}
                >
                    Sair
                </Button>

            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
