export default function Dashboard({
  scoreCount,
  gameRound,
  isSinglePlayer,
  isSelectSignX,
  handleResetGame,
}) {
  return (
    <>
      {gameRound > 0 && (
        <div className="absolute top-0 left-7 z-50">
          {isSinglePlayer ? (
            <span>
              <span>Player : {scoreCount[isSelectSignX ? "x" : "o"]} </span>
              <span className="pl-5">
                Computer: {scoreCount[isSelectSignX ? "o" : "x"]}
              </span>
            </span>
          ) : (
            <span>
              <span>Player x : {scoreCount[isSelectSignX ? "x" : "o"]} </span>
              <span className="pl-5">
                Player o: {scoreCount[isSelectSignX ? "o" : "x"]}
              </span>
            </span>
          )}
          <button className="ml-5" onClick={() => handleResetGame()}>
            reset
          </button>
        </div>
      )}
    </>
  );
}
