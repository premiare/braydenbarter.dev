import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_FINE_GRAIN_TOKEN,
});

export async function GET() {
  try {
    const repos = await octokit.request("GET /users/{username}/repos", {
      username: "premiare",
      sort: "updated",
    });

    const reposData = repos.data.map((repo: any) => ({
      name: repo.name,
      pushed_at: repo.pushed_at,
      html_url: repo.html_url,
      private: repo.private,
    }));

    return Response.json({ reposData }, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch (error: any) {
    console.error("Error fetching GitHub data:", error);
    return Response.json(
      { error: "Failed to fetch GitHub data", message: error.message },
      { status: 500 }
    );
  }
}

