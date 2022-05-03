const TicBoard = ({
  winResult,
  gameRound,
  isLoading,
  isGameEnd,
  isAiTurn,
  handleClickBoard,
  index,
  item,
}) => {
  return (
    <>
      {item ? (
        <div
          className={
            winResult.includes(index)
              ? "bg-black flex items-center justify-center w-[78.6667px] h-[78.6667px] select-none"
              : "bg-green-900 flex items-center justify-center w-[78.6667px] h-[78.6667px] select-none"
          }
        >
          <span
            className={
              winResult.includes(index)
                ? "text-blue-500 text-3xl"
                : "text-white text-3xl"
            }
          >
            {item}
          </span>
        </div>
      ) : (
        <div
          className="bg-green-900 flex items-center justify-center w-[78.6667px] h-[78.6667px] select-none
          hover:bg-opacity-90 transition-all duration-200 ease-linear cursor-pointer"
        >
          <button
            disabled={isLoading || isGameEnd || isAiTurn}
            className="w-full h-full"
            onClick={() => handleClickBoard(index)}
          ></button>
        </div>
      )}
    </>
  );
};

export default function Playboard({
  isLoading,
  isGameEnd,
  gameRound,
  isAiTurn,
  board,
  winResult,
  handleSelectBoard,
}) {
  return (
    <>
      {gameRound > 0 && (
        <div className="grid grid-cols-3 col-span-3 gap-0.5 my-2 w-[15rem] h-[15rem] bg-gray-100">
          {board.map((item, index) => {
            return (
              <TicBoard
                key={index+1001}
                winResult={winResult}
                isLoading={isLoading}
                isGameEnd={isGameEnd}
                isAiTurn={isAiTurn}
                handleClickBoard={handleSelectBoard}
                index={index}
                item={item}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
