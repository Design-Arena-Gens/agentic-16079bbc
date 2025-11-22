import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Futsal Fatigue and Landing Mechanics ? Elite Female Players",
  description: "Q1-style article with simulated data on fatigue effects on shock absorption strategies and lower extremity kinematics during single-leg landing in elite female futsal players.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
