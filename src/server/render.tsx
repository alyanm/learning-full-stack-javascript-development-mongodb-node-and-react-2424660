/* eslint-disable react/react-in-jsx-scope */
import ReactDOMServer from "react-dom/server";
import { fetchContest, fetchContestList } from "../api-client";
import App from "../components/app";

const serverRender = async (req) => {
  const { contestId } = req.params;

  const initialData = contestId
    ? { currentContest: await fetchContest(contestId) }
    : { contests: await fetchContestList() };

  const contests = await fetchContestList();
  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={{ contests }} />,
  );

  return { initialMarkup, initialData };
};

export default serverRender;
