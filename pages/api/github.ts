import { NextApiRequest, NextApiResponse } from "next";
import { octokit } from "../../lib/octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const getGithubData = async () => {
      const user = await octokit.request("GET /users/{username}", {
        username: "premiare",
      });

      const userData = user.data;

      const repos = await octokit.request("GET /users/{username}/repos", {
        username: "premiare",
        sort: "updated",
      });

      const reposData = repos.data;

      return {
        reposData,
        userData,
      };
    };

    const { reposData, userData } = await getGithubData();

    res.status(200).json({ reposData, userData });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
}
