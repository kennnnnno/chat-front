import { Room } from "./Room";

export const RoomList = () => {
  const RoomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="h-full overflow-y-auto">
      {RoomList.map((p) => (
        <Room key={p} id={p} />
      ))}
    </div>
  );
};
