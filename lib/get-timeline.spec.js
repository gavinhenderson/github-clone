import getTimeline from "./get-timeline";
import config from "./config";

it("can get an activity feed for a given user", async () => {
  const githubToken = config.githubToken;
  const username = config.username;

  const feed = await getTimeline({ githubToken, username });

  expect(feed).toBeDefined();
});
