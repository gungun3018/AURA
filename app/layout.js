import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Bootstrapjs from "@/InstallBSJS";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project X",
  description: "Staring Files For Project",
  
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <Bootstrapjs/>
      <body className={inter.className}>{children}</body>
     </html>
  );
}
