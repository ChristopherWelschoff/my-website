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
    --bg-primary: #0a0a0c;
    --bg-card: #131418;
    --bg-card-hover: #1c1d22;
    --header-accent: #8a8f7a;

    /* Textfarben */
    --text-primary: #ffffffb6;
    --text-secondary: #8d8e92;
    --text-dimmed: #5c5d61;

    /* Akzentfarben */
    --accent-green: #718355;
    --accent-green-hover: #819662;

    /* Rahmentöne */
    --border-muted: #24262b;
    --border-active: #ffffff;

    /* Spacing-System (Mobile-Werte als Basis) */
    --space-section: 32px;
    --space-container: 16px;
    --space-inline: 12px;
  }

  @media (min-width: 768px) {
    :root {
      --space-section: 60px;
      --space-container: 40px;
      --space-inline: 20px;
    }
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: ${lora.style.fontFamily};
    min-height: 100vh;
    min-height: 100dvh;
   
  }

  main {
    flex: 1;
    width: 80%;
    margin: 0 auto
  }
`;

export default GlobalStyle;
