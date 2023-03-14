type PropsModal = {
  text?: string;
  title?: string;
  description?: string;
};

export function ModelHTML({ text, title, description }: PropsModal) {
  return (
    <>
      <div>
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}
