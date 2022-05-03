export default function TieGame({ isTie }) {
  return (
    <>
      {isTie && (
        <div className="endgame-container">
          <div className="endgame-text">
            It was a draw ...
          </div>
        </div>
      )}
    </>
  );
}
