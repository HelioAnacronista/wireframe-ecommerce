import Link from "next/link";

interface IconCompanyProps {
  img?: string;
}

function IconCompany({ img }: IconCompanyProps) {
  return (
    <>
      <Link href={"/"}>
        {img && (
          <img src={img} alt="Company logo" className="rounded-full  p-1" />
        )}
      </Link>
    </>
  );
}

export default IconCompany;
