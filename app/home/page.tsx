import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Homepage } from "../components/Homepage";
import { verify } from "../api/Auth";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/logIn");
  }
  const res = await verify(token);
  if (!res) {
    redirect("/logIn");
  }

  return <Homepage />;
}
