/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import { useState, useEffect } from "react";

import ContestList, { contestType } from "./contest-list";
import { useEffect, useState } from "react";
import Contest from "./contest";

// page:
const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    initialData.currentContest ? "contest" : "contestList",
  );
  const [currentContest, setCurrentContest] = useState<
  contestType | undefined
  >(initialData.currentContest);

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.contestId
        ? "contest"
        : "contestList";
      setPage(newPage);
      setCurrentContest({ id: event.state?.contestId });
    };
  });

  const navigateToContest = (contestId) => {
    window.history.pushState(
      { contestId },
      "",
      `/contest/${contestId}`,
    );
    setPage("contest");
    console.log("Contest ID: ", contestId);
    setCurrentContest({ id: contestId });
  };

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );

      case "contest":
        return <Contest initialContest={currentContest} />;
    }
  };

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setCounter(counter + 1);
  //     }, 1000);
  //     console.log("Rendering App Component", intervalId);

  //     return () => {
  //         clearInterval(intervalId);
  //     }
  // }, []);

  return (
    <div style={{ color: "green" }} className="container">
      {pageContent()}

      {/* <button onClick={() => {
                setCounter(counter+1);
            }}>{ counter }</button> */}
    </div>
  );
};

export default App;
