import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import "@mantine/core/styles.css";

import {
  createTheme,
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  AppShell,
  AppShellHeader,
  AppShellMain,
} from "@mantine/core";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const theme = createTheme({
  primaryColor: "teal",
  fontFamily: "Nunito Sans",
});

export const metadata: Metadata = {
  title: "Matt Gefen",
  description: "The personal site of Matt Gefen, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme="dark"/>
      </head>
      <body className={nunito.className}>
        <MantineProvider theme={theme} forceColorScheme="dark">
          <AppShell padding="xl" header={{ height: 50 }}>
            <AppShellHeader withBorder={false}>
              <NavBar />
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
