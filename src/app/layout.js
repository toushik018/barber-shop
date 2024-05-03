import Footer from "@/components/Shared/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
