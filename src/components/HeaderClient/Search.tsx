function Search() {
  return (  
  <div className="w-[578px] h-[48px] bg-[#FFFFFF] flex rounded-full p-2 mr-2"
    >
      <input type="text" value="" alt=""
      placeholder="As melhores ofertas estão aqui" 
      className="focus:outline-none focus:ring-0 focus:ring-[#fff]
      w-full"
      />

      <img src="/images/icon-test.svg" alt="" 
      width={'40px'}/>
      
  </div>
  );
}

export default Search;