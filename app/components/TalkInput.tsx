export const TalkInput = () => {
  return (
    <div className="flex">
      <textarea
        placeholder="メッセージを入力"
        className="mb-2 border-3 border-gray-500 text-lg rounded-2xl w-7/8 h-20"
      />
      <button className="border-2 w-15 mr-5 ml-2 my-4 bg-gray-300 rounded-xl font-bold hover:bg-gray-400">
        送信
      </button>
    </div>
  );
};
