export const Room = (props: { id: number }) => {
  const { id } = props;
  return <div className="h-20 shadow-md">AI{id}</div>;
};
