"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createAccount } from "../api/Users";

export const CreateInput = () => {
  const [id, setId] = useState("");
  const [settingPass, setSettingPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const router = useRouter();
  const clickCreate = async () => {
    try {
      await createAccount(id, settingPass);
      router.push("/home");
    } catch (error: any) {
      if (error.message === "409") {
        alert("このIDは既に使われています。");
      }
      if (error.message === "400") {
        alert("パスワードを入力してください。");
      }
      setId("");
      setSettingPass("");
      setConfirmPass("");
    }
  };
  return (
    <>
      <label className="text-gray-100">
        ID
        <input
          placeholder="新しいIDを入力"
          value={id}
          onChange={(evt) => setId(evt.target.value)}
          className="px-3 ml-30 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <br></br>
      <label className="text-gray-100">
        パスワード
        <input
          placeholder="新しいパスワードを入力"
          type="password"
          value={settingPass}
          onChange={(evt) => setSettingPass(evt.target.value)}
          className="px-3 ml-15 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <label className="text-gray-100 mt-3">
        パスワード(確認用)
        <input
          placeholder="確認のためもう一度入力"
          type="password"
          value={confirmPass}
          onChange={(evt) => setConfirmPass(evt.target.value)}
          className="px-3 ml-2 bg-gray-100 w-60 rounded-lg text-black"
        ></input>
      </label>
      <button
        onClick={clickCreate}
        className="bg-gray-800 text-gray-100 mt-8 border-gray-100 border-3 rounded-3xl p-1.5 px-5 hover:bg-gray-600"
      >
        作成
      </button>
      <div
        onClick={() => router.back()}
        className="text-gray-100 text-xs mt-3 mb-4 underline"
      >
        戻る
      </div>
    </>
  );
};
