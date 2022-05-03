export default function WinGame ({
  isXPlayerWin,
  isOPlayerWin
}) {
  return (
    <>
      {
        isXPlayerWin && (
          <div className="endgame-container">
            <div className="endgame-text"> 
              X Player Win
            </div>
          </div>
        )
      }
      {
        isOPlayerWin && (
          <div className="endgame-container">
            <div className="endgame-text"> 
              O Player Win
            </div>
          </div>
        )
      }
    </>
  )

}