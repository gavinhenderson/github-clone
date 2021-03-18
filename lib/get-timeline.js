import { Octokit } from '@octokit/rest';

const getTimeline = async ({ githubToken, username }) => {
  const octokit = new Octokit({
    auth: githubToken,
  });

  const {
    data: receivedEvents,
  } = await octokit.activity.listReceivedEventsForUser({
    username,
    per_page: 100,
  });

  return receivedEvents;
};

export default getTimeline;
