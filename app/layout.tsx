"use client";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="dark"
          theme={{
            primaryColor: "green",
            colors: {
              dark: [
                "#C1C2C5",
                "#A6A7AB",
                "#909296",
                "#5C5F66",
                "#373A40",
                "#2C2E33",
                "#25262B",
                "#1A1B1E",
                "#141517",
                "#101113",
              ],
            },
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
