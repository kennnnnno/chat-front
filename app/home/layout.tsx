import { LogoutButton } from "../components/LogOutButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between shadow h-12 bg-gray-200">
        <h1 className="ml-5 text-2xl font-bold">K-CHAT</h1>
        <LogoutButton />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
