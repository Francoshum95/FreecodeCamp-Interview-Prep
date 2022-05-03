import Link from "next/link";

export default function Navbar({path}) {
  return (
    <div className="text-white mt-5 w-full float-left">
      <button className="hover:opacity-70">
        <Link href={path}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </Link>
      </button>
    </div>
  )
}
