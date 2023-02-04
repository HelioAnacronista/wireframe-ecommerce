function AccessAccount() {
  return (
    <div
      className="
    flex
    h-[47px] w-[220px] cursor-pointer 
    items-center rounded-full bg-[#FFFFFF] transition 
    duration-300 hover:bg-[#E1E0E7] focus:outline-none 
    sm:hidden
    xl:flex"
    >
      <img className="ml-6" src="/images/icon-account.svg" alt="" />
      <p className="ml-1 font-semibold text-[#5F5C6B]">Acessar conta</p>
    </div>
  );
}

export default AccessAccount;
