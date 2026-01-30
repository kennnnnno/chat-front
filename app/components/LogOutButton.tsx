"use client";

import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const logOut = () => {
    document.cookie = "token=; path=/; max-age=0";
    document.cookie = "user_id=; path=/; max-age=0";
    router.push("/logIn");
  };
  return (
    <button onClick={logOut} className="mr-5 font-semibold text-sm underline">
      ログアウト
    </button>
  );
};
