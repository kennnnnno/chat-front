"use client";

import { useContext, useEffect, useState } from "react";
import { logIn } from "../api/Auth";

export const LoginInput = () => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const clickLogin = async () => {
    try {
      await logIn(id, pass);
      setId("");
      setPass("");
    } catch (error: any) {
      if (error.message === "401") {
        alert("IDまたはパスワードが正しくありません。");
      }
      if (error.message === "400") {
        alert("パスワードを入力してください。");
      }
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
          value={pass}
          onChange={(evt) => setPass(evt.target.value)}
          className="px-3 ml-5 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <button
        onClick={clickLogin}
        className="bg-gray-800 text-gray-100 mt-10 border-gray-100 border-3 rounded-3xl p-1.5 px-5 hover:bg-gray-600"
      >
        ログイン
      </button>
    </>
  );
};
