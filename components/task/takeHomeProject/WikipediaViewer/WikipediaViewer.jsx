import Link from 'next/link';
import useWikipediaViewer from "./useWikipediaViewer";

export default function WikipediaViewer() {
  const {
    query,
    toggle,
    handleOnChange,
    handleSetToggle,
    handleToggle,
    onKeyPress,
    searchData,
  } = useWikipediaViewer();

  return (
    <div className="w-full h-full">
      <div className="w-[20rem] h-[13rem] rounded-lg bg-blue-400 box-border p-4 text-sm text-white">
        <div>
          <h1>Click to search</h1>
          <button onClick={() => handleSetToggle()} className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${toggle && "hidden"} h-4 w-4`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div
            className={`${
              !toggle && "hidden"
            } w-full h-7 border-2 rounded-lg p-1 flex justify-between items-center`}
          >
            <input
              value={query}
              onChange={handleOnChange}
              onKeyPress={onKeyPress}
              className="box-boarder px-1 h-4 w-full border-none outline-none text-white bg-blue-400"
            />
            <button className="" onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              searchData ? "overflow-y-scroll" : "overflow-y-hidden"
            } w-full text-black h-[15rem]`}
          >
            {searchData &&
              searchData.map((item) => {
                return (
                  <div
                    className="bg-white p-4 flex justify-center flex-row hover:opacity-95 
                      border-b-2"
                    key={item.index}
                  >
                    <Link href={item.url}>
                      <a target="_blank">
                        <div className="cursor-pointer" target="_blank">
                          <h1 className="text-xl font-bold">{item.title}</h1>
                          <h2 className="text-sm">{item.content}</h2>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
