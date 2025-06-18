import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header className="h-10 w-full bg-[#282b75] text-white flex items-center justify-center">
          <h1>Example of events on elements</h1>
        </header>

          <main className="flex flex-1 h-full overflow-hidden">
              {children}
          </main> 

        <footer className="h-10 w-full bg-[#282b75] text-white flex items-center justify-center">
          <p>Javier Dominguez</p>
        </footer>
      </body>
    </html>
  );
}
