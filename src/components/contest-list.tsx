/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import ContestPreview from "./contest-preview";
import Header from "./header";

export interface contestType {
  id: string;
  categoryName?: string;
  contestName?: string;
  description?: string;
}

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests] = useState(initialContests);

  const contestResults: contestType[] = contests?.[0] || [];

  return (
    <>
      <Header message="Naming Contests" />
      <div className="contest-list">
        {Array.isArray(contestResults) &&
          contestResults.map((contest) => {
            console.log("Contest: ", contest);
            return (
              <ContestPreview
                key={contest.id}
                contest={contest}
                onClick={onContestClick}
              />
            );
          })}
      </div>
    </>
  );
};

export default ContestList;
