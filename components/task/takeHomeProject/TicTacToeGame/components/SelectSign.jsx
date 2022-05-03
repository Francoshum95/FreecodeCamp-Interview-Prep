export default function SelectSign({
  isSinglePlayer,
  isSelectSignX,
  handleSelectSign,
  handleReturnSelectUsePage
  }) {
    console.debug("testong ios", isSinglePlayer, isSelectSignX)
  return (
    <>
      {isSelectSignX===null && typeof isSinglePlayer === "boolean" && (
        <div
          className={'flex p-2 flex-col h-full'}
        >
          <h1 className="text-center text-white text-2xl italic">
            {isSinglePlayer? "Would you like to be X or O?" : "Player 1: Would you like X or O?"}
          </h1>
          <div className="flex w-full item-center mt-5 text-2xl font-bold text-gray-400 justify-center">
            <button
              onClick={() => {
                handleSelectSign(true);
              }}
              className="hover:text-white hover:border-gray-200 hover:border-2 hover:border-dashed w-[3rem] h-9 rounded-xl"
            >
              X
            </button>
            <button
              onClick={() => {
                handleSelectSign(false);
              }}
              className="hover:text-white hover:border-gray-200 hover:border-2 hover:border-dashed w-[3rem] h-9 rounded-xl"
            >
              O
            </button>
          </div>
          <button
            onClick={() => {
              handleReturnSelectUsePage();
            }}
            className="flex items-center justify-center w-full mt-auto text-gray-400 font-bold text-2xl group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="ml-3 group-hover:text-gray-200">Back</span>
          </button>
        </div>
      )}
    </>
  );
}
