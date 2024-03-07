import localFont from "next/font/local";
import { Inter, Manrope } from "next/font/google";

const myGameGradual = localFont({
  variable: "--myGameGradual",
  src: [
    {
      path: "./myGameGradual/MyGameGradual-ExtraBold.woff2",
      weight: "800",
    },
  ],
});

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const manrope = Manrope({ subsets: ["latin"], variable: "--manrope" });

const fonts = { myGameGradual, inter, manrope };
export default fonts;
