import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    /* Hintergrundfarben */
    --bg-primary: #0a0a0c; /* Haupthintergrund (sehr dunkles Anthrazit/Schwarz) */
    --bg-card: #131418; /* Container & Cards */
    --bg-card-hover: #1c1d22; /* Interaktive Flächen bei Hover */

    /* Textfarben */
    --text-primary: #ffffffb6; /* Haupttext & Überschriften */
    --text-secondary: #8d8e92; /* Muted Text / Labels */
    --text-dimmed: #5c5d61; /* Inaktive Elements & Subtitles */

    /* Akzentfarben */
    --accent-green: #718355; /* Olivgrün (Button-Akzent) */
    --accent-green-hover: #819662;

    /* Rahmentöne */
    --border-muted: #24262b; /* Dezente Trennlinien & Rahmen */
    --border-active: #ffffff; /* Aktive Indikatoren */
  }

body {
    width: 100%;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: ${lora.style.fontFamily};
    min-height: 100vh;
}
`;

export default GlobalStyle;
