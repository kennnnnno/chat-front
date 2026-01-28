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
    <button
      onClick={logOut}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      ログアウト
    </button>
  );
};
