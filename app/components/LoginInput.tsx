"use client";

import { useContext, useState } from "react";
import { logIn } from "../api/Auth";
import { useRouter } from "next/navigation";

export const LoginInput = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();
  const clickLogin = async () => {
    try {
      const res = await logIn(id, pass);
      document.cookie = `token=${res.token}; path=/; max-age=${60 * 60}; SameSite=Lax`;
      document.cookie = `user_id=${res.user_id}; path=/; max-age=${60 * 60}; SameSite=Lax`;
      router.push("/home");
    } catch (error: any) {
      if (error.message === "401") {
        alert("IDまたはパスワードが正しくありません。");
      } else if (error.message === "400") {
        alert("パスワードを入力してください。");
      } else {
        alert("エラーが発生しました。");
      }
      setId("");
      setPass("");
    }
  };
  return (
    <>
      <label className="text-gray-100">
        ID
        <input
          value={id}
          onChange={(evt) => setId(evt.target.value)}
          className="px-3 ml-20 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <br></br>
      <label className="text-gray-100">
        パスワード
        <input
          type="password"
          value={pass}
          onChange={(evt) => setPass(evt.target.value)}
          className="px-3 ml-5 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <button
        onClick={clickLogin}
        className="bg-gray-800 text-gray-100 mt-8 border-gray-100 border-3 rounded-3xl p-1.5 px-5 hover:bg-gray-600"
      >
        ログイン
      </button>
      <div
        onClick={() => router.push("logIn/create")}
        className="text-gray-100 text-xs mt-3 underline"
      >
        アカウント作成はこちらから
      </div>
    </>
  );
};
