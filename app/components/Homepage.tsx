import { LogoutButton } from "./LogOutButton";

export const Homepage = () => {
  const logOut = () => {
    document.cookie = "token=; path=/; max-age=0";
    document.cookie = "user_id=; path=/; max-age=0";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center min-h-75 min-w-150 bg-gray-800 rounded-2xl">
        <h1 className="w-3/4 text-center m-5 text-2xl text-gray-100 mb-5 border-b-2 border-gray-100 pb-2">
          ようこそ
        </h1>
        <br></br>
        <LogoutButton />
      </div>
    </div>
  );
};
