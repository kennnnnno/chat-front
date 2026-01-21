const API_BASE_URL =
  (process.env.REACT_APP_API_BASE_URL || "http://localhost:3000") + "/auth";

export const logIn = async (id: string, pass: string) => {
  const res = await fetch(API_BASE_URL, {
    method: "POST",
    body: JSON.stringify({ user_id: id, password: pass }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    // catch ブロックに渡したい文字列（statusコードなど）を throw する
    throw new Error(String(res.status));
  }
  return res;
};
