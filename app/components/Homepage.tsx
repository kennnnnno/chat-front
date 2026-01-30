import { RoomList } from "./RoomList";
import { TalkInput } from "./TalkInput";
import { TalkList } from "./TalkList";

export const Homepage = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/3 shadow-2xl h-full">
        <RoomList />
      </div>
      <div className="flex-1 h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <TalkList />
        </div>
        <TalkInput />
      </div>
    </div>
  );
};
