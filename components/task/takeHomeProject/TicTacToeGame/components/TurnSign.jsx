export default function TurnSign({ gameRound,isSinglePlayer, isAiTurn, isXplayerTurn }) {
  console.debug("testing is", isAiTurn)
  
  return (
    <>
      {
        gameRound > 0 && (
          <div className="w-full h-[10%] absolute left-0 px-6 top-[-1.6rem]">
            <div className="flex w-full h-full justify-between">
              {isSinglePlayer ? (
                <>
                  <div
                    className={
                      isAiTurn
                        ? "opacity-0"
                        : "w-[50%] h-[70%] bg-blue-500 flex justify-center items-center text-white font-extrabold"
                    }
                  >
                    Player Turn
                  </div>
                  <div
                    className={
                      isAiTurn
                        ? "w-[50%] h-[70%] bg-red-500 flex justify-center items-center text-white font-extrabold"
                        : "opacity-0"
                    }
                  >
                    Computer Turn
                  </div>
                </>
              ) : (
                <>
                  <div className={isXplayerTurn ? "w-[50%] h-[70%] bg-blue-500 flex justify-center items-center text-white font-extrabold" : "opacity-0"}>
                    x Play Turn
                  </div>
                  <div className={isXplayerTurn ? "opacity-0" : "w-[50%] h-[70%] bg-red-500 flex justify-center items-center text-white font-extrabold"}>
                    o Play Turn
                  </div>
                </>
              )}
            </div>
          </div>
        )
      }
    </>
  );
}
