type PropsModal = {
  img?: string;
};

export function ModelIMG({ img }: PropsModal) {
  return (
    <>
      <div>
        <img src={img} alt="" />
      </div>
    </>
  );
}

