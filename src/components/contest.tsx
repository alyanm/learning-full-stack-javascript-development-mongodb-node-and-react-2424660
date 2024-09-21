/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
// import { fetchContest } from "../api-client";
import Header from "./header";
import { contestType } from "./contest-list";

const Contest = ({
  initialContest,
}: {
  initialContest: contestType;
}) => {
  const [contest, setContest] =
    useState<contestType>(initialContest);

  // useEffect(() => {
  //     fetchContest(id).then((contest) => {
  //         setContest(contest);
  //     });
  // }, [id]);

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Deescription</div>
        <div className="description">{contest.description}</div>
      </div>
    </>
  );
};

export default Contest;
