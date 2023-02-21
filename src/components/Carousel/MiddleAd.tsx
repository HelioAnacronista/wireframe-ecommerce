type MiddleProps = {
  name?: string;
};

function Middle({ name }: MiddleProps) {
  return (
    <div className="absolute  inset-x-0 top-40 left-20 ">
      <h1 className="bg text-4xl  font-bold text-mainColor-50 lg:text-6xl">
        {name}
      </h1>
    </div>
  );
}

export default Middle;
