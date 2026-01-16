export default function HomeMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center min-h-75 min-w-150 bg-gray-800 rounded-2xl">
        <h1 className="w-3/4 text-center m-5 text-2xl text-gray-100 mb-5 border-b-2 border-gray-100 pb-2">
          ログイン
        </h1>
        <br></br>
        <label className="text-gray-100">
          ID
          <input className="px-3 ml-20 bg-gray-100 w-60 rounded-lg text-black"></input>
        </label>
        <br></br>
        <label className="text-gray-100">
          パスワード
          <input className="px-3 ml-5 bg-gray-100 w-60 rounded-lg text-black"></input>
        </label>
        <button className="bg-gray-800 text-gray-100 mt-10 border-gray-100 border-3 rounded-3xl p-1.5 px-5 hover:bg-gray-600">
          ログイン
        </button>
      </div>
    </div>
  );
}
