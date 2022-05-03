import useTicTacToeGame from "./useTicTacToeGame"
import SelectPlayer from "./components/SelectPlayer";
import SelectSign from "./components/SelectSign";
import Playboard from "./components/Playboard";
import TieGame from "./components/TieGame";
import WinGame from "./components/WinGame";
import Dashboard from "./components/Dashboard";
import TurnSign from './components/TurnSign';

export default function TicTacToeGame(){
  const {
    board,
    winResult,
    isLoading,
    isGameEnd,
    isSinglePlayer,
    isSelectSignX,
    gameRound,
    isTie,
    scoreCount,
    isXPlayerWin,
    isXplayerTurn,
    isAiTurn,
    isOPlayerWin,
    handleSelectUser,
    handleSelectSign,
    handleReturnSelectUsePage,
    handleSelectBoard,
    handleResetGame
  } = useTicTacToeGame();

  return (
    <div className='w-[20rem] h-[23rem] bg-[rgba(240,180,135,1)] rounded-md shadow-2xl flex items-center justify-center relative'>
      <div className='w-[85%] h-[85%] bg-green-900 p-5 shadow-2xl'>
        <SelectPlayer
          isSinglePlayer={isSinglePlayer}
          handleSelectUser={handleSelectUser}
        />
        <SelectSign
          isSinglePlayer={isSinglePlayer}
          isSelectSignX={isSelectSignX}
          handleSelectSign={handleSelectSign}
          handleReturnSelectUsePage={handleReturnSelectUsePage}
        />
        <Playboard
          isLoading={isLoading}
          isGameEnd={isGameEnd}
          gameRound={gameRound}
          isAiTurn={isAiTurn}
          board={board}
          winResult={winResult}
          handleSelectBoard={handleSelectBoard}
        />
        <TieGame
          isTie={isTie}
        />
        <WinGame
          isXPlayerWin={isXPlayerWin}
          isOPlayerWin={isOPlayerWin}
        />
        <Dashboard
          scoreCount={scoreCount}
          gameRound={gameRound}
          isSinglePlayer={isSinglePlayer}
          isSelectSignX={isSelectSignX}
          isAiTurn={isAiTurn}
          isXplayerTurn={isXplayerTurn}
          handleResetGame={handleResetGame}
        />
        <TurnSign
          gameRound={gameRound}
          isSinglePlayer={isSinglePlayer}
          isAiTurn={isAiTurn}
          isXplayerTurn={isXplayerTurn}
        />
      </div>
    </div>
  )


}