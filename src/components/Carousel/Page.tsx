interface PageProps {
  page: number;
  totalPages: number;
}

function Page({ page, totalPages }: PageProps) {
  return (
    <>
      <div className="flex">
        {Array.from({ length: totalPages }, (_, index) => (
          <div key={index} className="mx-[2px]">
            {page === index ? (
              <div
                key={index}
                className="h-[10px] w-[10px] rounded-full bg-mainColor-500 text-mainColor-500"
              ></div>
            ) : (
              <div
                key={index}
                className="h-[10px] w-[10px] rounded-full bg-mainColor-100 text-mainColor-100"
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
