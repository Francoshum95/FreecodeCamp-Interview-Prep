import Head from "next/head";
import Link from "next/link";

const pageContent = [
  // {
  //   title: "Algorithms",
  //   url: "/algorithms",
  // },
  // {
  //   title: "Data Structures",
  //   url: "",
  // },
  { title: "Take Home Project", 
  url: "/take-home-project" },
  { title: "", 
  url: "" },
  { title: "", 
  url: "" },
  { title: "", 
  url: "" }
];

export default function Home() {
  return (
    <div className="menu-containe">
      <Head>
        <title>Hack FreeCodeCampe Coding Interview Prep</title>
        <meta name="description" content="Franco8888" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="menu-header">
        <h1 className="menu-header-text">
          FreeCodeCampe - Coding Interview Prep
        </h1>
      </div>
      <div className="menu-content-container">
        {pageContent.map((page) => {
          return (
            <div className="menu-content-grid">
              <Link href={page.url}>
                <button className="menu-content-item">
                  {page.title}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}
