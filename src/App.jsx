import data from "./data.json";
// // import { useEffect } from "react";

// // function SummaryComponent() {
// //   useEffect(() => {
// //     <div className="border border-black">
// //       {data.map((dt) => {
// //         return (
// //           <div
// //             key={dt.category}
// //             className="border text-ButtonColor border-black"
// //           >
// //             {dt.category}
// //           </div>
// //         );
// //       })}
// //     </div>;
// //   }, []);
// // }

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-Main shadow-2xl rounded-3xl text-Main flex-wrap">
        <div
          id="sideCard"
          className="flex flex-col justify-center rounded-b-3xl xl:rounded-3xl md:rounded-3xl items-center w-full xl:w-72 md:w-72 py-8"
        >
          <h1 className="text-xl font-semibold mb-8 text-Text">Your Result</h1>
          <div
            id="Circle"
            className="flex flex-col justify-center items-center w-44 h-44 rounded-full"
          >
            <span className="text-6xl font-bold mb-1">76</span>
            <span className="font-semibold text-Text">of 100</span>
          </div>
          <h2 className="text-2xl font-bold my-3">Great</h2>
          <p className="text-center mx-20 md:mx-12 xl:mx-12 text-Text text-sm">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-ButtonColor mx-5 mt-4 xl:my-2 md:my-2 text-xl font-bold">
            Summary
          </h1>
          <div>
            {data.map((dt) => {
              let className = `flex items-center justify-between w-72 xl:w-60 md:w-60 p-1 bg-Summary rounded-xl font-bold `;

              switch (dt.category) {
                case "Reaction":
                  className += " text-Reaction bg-opacity-60";
                  break;
                case "Memory":
                  className += " text-Memory bg-opacity-20";
                  break;
                case "Verbal":
                  className += " text-Verbal bg-opacity-60";
                  break;
                case "Visual  ":
                  className += " text-Visual bg-opacity-60";
                  break;
                default:
                  className += " text-ButtonColor bg-opacity-60";
                  break;
              }
              return (
                <div
                  key={dt.category}
                  className="mx-5 my-3 rounded-xl relative"
                >
                  <div className={className}>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-Text rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-Text rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-Text rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-Text rounded-br-xl"></div>
                    <div className="flex justify-start p-2">
                      <img src={dt.icon} alt={dt.category} className="mr-2" />
                      {dt.category}
                    </div>
                    <p className="p-2 text-ButtonColor font-extrabold">
                      {dt.score}{" "}
                      <span className="text-Text font-extrabold">/100</span>
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="w-full flex justify-center">
              <button className="text-Main w-full m-5 p-3 rounded-full bg-ButtonColor">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/ezitounioussama">Oussama Ezitouni</a>.
      </div>
    </>
  );
}

export default App;
