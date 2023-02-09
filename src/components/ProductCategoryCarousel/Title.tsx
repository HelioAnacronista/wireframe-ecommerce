import React from "react";

type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  const words = title.split(" ");
  return (
    <div>
      <h1>
        {words.map((word, index) => {
          return (
            <React.Fragment key={index}>
              {word}
              <br />
            </React.Fragment>
          );
        })}
      </h1>
    </div>
  );
}

export default Title;
