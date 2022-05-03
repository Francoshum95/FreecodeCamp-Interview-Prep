import Link from "next/link"

export default function Task({task}) {
  const {name, showcase, code_url, des, source} = task;

  return (
    <div className="text-white bg-gray-400 w-full h-[15rem] p-3 rounded-md flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <pre className="whitespace-pre-line md:text-sm text-xs h-[75%]">
        {des}
      </pre>
      <div className="flex mt-auto w-full justify-between">
        <Link href={showcase}>
          <button
            className="relative inline-block px-4 py-2 group w-[7rem] h-10 mx-5"
            >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white text-sm text-center">ShowCase</span>
          </button>
        </Link>
        <Link href={showcase}>
          <button
            className="relative inline-block px-4 py-2 group w-[7rem] h-10 mx-5"
            >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white text-sm text-center">Code</span>
          </button>
        </Link>
      </div>
      <Link href={source} passHref>
        <a target="_blank" className="w-5 block mt-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </a>
      </Link>
    </div>
  )
}
