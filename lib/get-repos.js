import { Octokit } from "@octokit/rest";

const getRepos = async ({ githubToken, repoNames }) => {
  const octokit = new Octokit({
    auth: githubToken,
  });

  return Promise.all(
    repoNames.map(async (name) => {
      const [owner, repo] = name.split("/");

      const response = await octokit.repos.get({ owner, repo });

      return response.data;
    })
  );
};

export default getRepos;
