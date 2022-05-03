export default function SelectPlayer({
  isSinglePlayer, 
  handleSelectUser }){
  return (
    <>
      {isSinglePlayer===null &&(
        <div className="p-2">
          <h1 className="text-center text-white text-2xl italic">
            How do you want to play?
          </h1>
          <div className="flex w-full justify-between mt-5 text-lg font-bold text-gray-400">
            <button
              onClick={() => handleSelectUser(true)}
              className="hover:text-white hover:border-gray-200 hover:border-2 hover:border-dashed w-[6rem] h-8"
            >
              One Player
            </button>
            <button
              onClick={() => handleSelectUser(false)}
              className="hover:text-white hover:border-gray-200 hover:border-2 hover:border-dashed w-[6rem] h-8"
            >
              Two Player
            </button>
          </div>
        </div>
      )}
    </>
  );
}
