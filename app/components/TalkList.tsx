import { Talk } from "./Talk";
import { TalkInput } from "./TalkInput";

export const TalkList = () => {
  const RoomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div>
        {RoomList.map((p) => (
          <Talk key={p} id={p} />
        ))}
      </div>
    </>
  );
};
