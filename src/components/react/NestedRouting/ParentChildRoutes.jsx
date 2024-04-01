import { useState } from "react";

export function BrowserChrome({ url, children }) {
  return (
    <div className="relative mx-2 overflow-hidden rounded bg-gray-700 shadow-md border-t border-gray-600 md:mx-4 md:rounded-lg lg:mx-auto lg:max-w-4xl">
      <URLBar url={url} />
      <div className="px-2 pb-2 pt-1 md:px-4 md:pb-4 md:pt-2">{children}</div>
    </div>
  );
}

function URLBar({ url }) {
  return (
    <div className="!mt-0 relative flex items-center px-1 md:px-2 md:pt-2">
      <div className="!mt-0 w-1/6 flex items-end justify-center gap-2">
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className="relative flex w-2/3 items-center rounded-md bg-gray-600 px-2 py-1 text-gray-100 md:px-3 md:py-1">
        <span className="md:text-sm">{url}</span>
        <Refresh className="absolute right-1 h-4 w-4 md:h-5 md:w-5" />
      </div>
    </div>
  );
}

function Circle() {
  return <div className="!mt-4 h-2 w-2 rounded-full bg-gray-400 md:h-3 md:w-3" />;
}

function Refresh({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 7 7"
    >
      <path
        fill="#fff"
        fillOpacity="0.8"
        d="M5.088 4.004l-.125.126.125.125.126-.125-.126-.126zm-1.073-.822l.948.948.251-.252-.948-.948-.251.252zm1.2.948l.947-.948-.251-.252-.948.948.251.252z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.8"
        strokeWidth="0.355"
        d="M4.26 4.966a1.659 1.659 0 11.829-1.436"
      ></path>
    </svg>
  );
}

function Header({ isHovering }) {
  return (
    <div className="!mt-0 relative bg-white/10 p-4 flex justify-end">
      <div className="!mt-0 flex gap-4">
        <div className="!mt-0 bg-white px-3 py-2 w-64 rounded text-slate-800 text-xs">
          Search
        </div>
      </div>
      <div
        className="!mt-0 flex items-center pr-4 pl-8 font-semibold text-slate-100"
      >
        Log in
      </div>
      {isHovering && (
        <div
          style={{ marginTop: 0 }}
          className="absolute grid content-center inset-0 bg-blue-400/10 border-4 border-blue-500 shadow-lg shadow-black/30 backdrop-blur-sm"
        >
          <span className="text-blue-500 font-bold uppercase text-4xl text-center drop-shadow shadow-black">
            Parent
          </span>
        </div>
      )}
    </div>
  );
}

function Body({ isHovering }) {
  return (
    <div
      className="!mt-0 relative flex items-center justify-center h-48 bg-black/10"
    >
      <div className="!mt-0 w-1/2">
        <h3 className="!mt-0 text-center">
          <span className="text-4xl font-black">
            Hello from{" "}
            <pre className="bg-white/10 rounded w-fit mx-auto">
              app/routes/_index.tsx
            </pre>
          </span>
        </h3>
      </div>
      {isHovering && (
        <div
          style={{ marginTop: 0 }}
          className="absolute grid content-center inset-0 bg-teal-400/10 border-4 border-teal-500 shadow-lg shadow-black/50 backdrop-blur-sm"
        >
          <span className="text-teal-500 font-bold uppercase text-4xl text-center drop-shadow shadow-black">
            Child
          </span>
        </div>
      )}
    </div>
  );
}

function Footer({ isHovering }) {
  return (
    <div className="!mt-0 relative bg-white/10 px-4">
      <div className="!mt-0">
        <div className="!mt-0 flex justify-between border-b border-white px-8 py-4">
          <div className="!mt-0 bg-white rounded-full w-10 h-10" />
          <div
            style={{ marginTop: 0 }}
            className="flex items-center gap-4 font-bold"
          >
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="text-slate-100 uppercase px-8 pb-4 text-xs">
          © Change this to your company name! | {currentYear}
        </div>
      </div>
      {isHovering && (
        <div
          style={{ marginTop: 0 }}
          className="absolute grid content-center inset-0 bg-blue-400/10 border-4 border-blue-500 shadow-lg shadow-black/30 backdrop-blur-sm"
        >
          <span className="text-blue-500 font-bold uppercase text-4xl text-center drop-shadow shadow-black">
            Parent
          </span>
        </div>
      )}
    </div>
  );
}

function Buttons({ handleHover }) {
  return (
    <div className="flex justify-around gap-4 pt-8 pb-6 !mt-0">
      <div
        onMouseEnter={() => handleHover("parent")}
        onMouseLeave={() => handleHover(null)}
        className="cursor-pointer inline-block text-lg font-semibold text-blue-300 px-8 py-4 rounded-full shadow shadow-black/30 transition duration-500 bg-blue-800 border-t border-blue-700 hover:shadow-md hover:shadow-black/40 hover:border-blue-600 !mt-0"
      >
        {"<root.tsx>"}
      </div>
      <div
        onMouseEnter={() => handleHover("child")}
        onMouseLeave={() => handleHover(null)}
        style={{ marginTop: 0 }}
        className="cursor-pointer inline-block text-lg font-semibold text-teal-300 px-8 py-4 rounded-full shadow shadow-black/30 transition duration-500 bg-teal-800 border-t border-teal-700 hover:shadow-md hover:shadow-black/40 hover:border-teal-600"
      >
        {"<_index.tsx>"}
      </div>
    </div>
  );
}

const currentYear = new Date().getFullYear();

export default function EpicNews() {
  const [currentlyHovering, setCurrentlyHovering] = useState(null);

  const handleHover = (hovering) => {
    setCurrentlyHovering(hovering);
  };

  return (
    <div className="p-4 bg-white/10 ">
      <Buttons handleHover={handleHover} />
      <BrowserChrome url="http://localhost:3000">
        <Header isHovering={currentlyHovering === "parent"} />
        <Body isHovering={currentlyHovering === "child"} />
        <Footer isHovering={currentlyHovering === "parent"} />
      </BrowserChrome>
    </div>
  );
}
