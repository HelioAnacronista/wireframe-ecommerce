type htmlDTO = {
  title: string;
  description: string;
};

type PropsModal = {
  img?: string;
  html?: htmlDTO;
};

function Modal({ img, html }: PropsModal) {
  return (
    <>
      {img != undefined ? (
        <div>
          <img src={img} alt="" />
        </div>
      ) : (
        <div>
          <h1>{html?.title}</h1>
          <p>{html?.description}</p>
        </div>
      )}
    </>
  );
}

export default Modal;
