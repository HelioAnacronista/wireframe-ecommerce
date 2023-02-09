function BottomPlus() {
  return (
    <div className="my-4">
      <div className="my-2 flex">
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-mainColor-200">
          <img src="/images/item-1.svg" alt="" />
        </div>
        <div className="ml-4 flex items-center font-medium text-mainColor-700">
          <p>Atualizações mensais</p>
        </div>
      </div>

      <div className="my-2 flex">
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-mainColor-200">
          <img src="/images/item-2.svg" alt="" />
        </div>
        <div className="ml-4 flex items-center font-medium text-mainColor-700">
          <p> + Atualizações mensais</p>
        </div>
      </div>

      <div className="my-2 flex">
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-mainColor-200">
          <img src="/images/item-3.svg" alt="" />
        </div>
        <div className="ml-4 flex items-center font-medium text-mainColor-700">
          <p> + Atualizações mensais</p>
        </div>
      </div>
    </div>
  );
}

export default BottomPlus;
