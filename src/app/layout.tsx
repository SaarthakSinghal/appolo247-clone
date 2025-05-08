import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Appointment Online with General Physician & Internal Medicine Doctors near you | Apollo 247",
  description: "General Physician & Internal Medicine - Consult experienced general physicians and internal medicine doctors online at Apollo 247 for diagnosis and treatment of common illnesses, chronic conditions, and preventive care. Book an appointment today.",
  metadataBase: new URL("https://www.apollo247.com/general-physician-internal-medicine?device=desktop"),
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
