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
        <ColorSchemeScript />
      </head>
      <body className={nunito.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <NavBar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
