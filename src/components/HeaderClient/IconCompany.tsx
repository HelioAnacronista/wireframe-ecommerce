import React from "react";

interface IconCompanyProps {
  img?: string;
}

function IconCompany({ img }: IconCompanyProps) {
  return (
    <>
      {img && (
        <img src={img} alt="Company logo" className="rounded-full  p-1" />
      )}
    </>
  );
}

export default IconCompany;
