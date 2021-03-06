/**
 * Source: https://github.com/vercel/next-learn-starter/blob/master/learn-starter/pages/index.js
 */

import Head from "next/head";
import getTimeline from "../lib/get-timeline";
import config from "../lib/config";
import ActivityCard from "../components/activity-card";
import timeStampToRelativeTime from "../lib/timestamp-to-relative-time";
import getRepos from "../lib/get-repos";
import languageColours from "../lib/colours.json";

export default function Home({ feed }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {feed.map(
          (
            { username, userId, repoPath, activity, timeSince, repo },
            index
          ) => {
            return (
              <div key={`${username}-${repoPath}-${activity}-hr`}>
                {!!index && <hr />}
                <ActivityCard
                  username={username}
                  activity={activity}
                  repoPath={repoPath}
                  userId={userId}
                  timeSince={timeSince}
                  repo={repo}
                ></ActivityCard>
              </div>
            );
          }
        )}
      </main>
      <style jsx>{`
        hr {
          margin: 16px 0;
          height: 1px;
          color: #e1e4e8;
          background-color: #e1e4e8;
          border: none;
        }

        main {
          width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const feed = await getTimeline({
    githubToken: config.githubToken,
    username: config.username,
  });

  const isStarredRepo = (activityItem) =>
    activityItem.type === "WatchEvent" &&
    activityItem.payload.action === "started";

  const isCreatedRepo = (activityItem) => activityItem.type === "CreateEvent";

  const filterActivities = (activityItem) => {
    return isStarredRepo(activityItem) || isCreatedRepo(activityItem);
  };

  const whitelistedFeedItems = feed.filter(filterActivities);

  if (whitelistedFeedItems.length !== feed.length) {
    const droppedEvents = feed.filter(
      (activity) => !filterActivities(activity)
    );

    console.warn("You dropped some events", droppedEvents.length);
  }

  const repos = await getRepos({
    githubToken: config.githubToken,
    repoNames: whitelistedFeedItems.map((item) => item.repo.name),
  });

  const feedAsProps = whitelistedFeedItems.map((activityItem) => {
    const repo = repos.find(
      (repo) =>
        repo.full_name.toLowerCase() === activityItem.repo.name.toLowerCase()
    );
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const updatedAtDate = new Date(repo.updated_at);
    const month = months[updatedAtDate.getMonth()];
    const day = updatedAtDate.getDate();
    const languageColour = languageColours[repo.language] || {};
    const colour = languageColour.color || "black";

    if (colour === "black") {
      console.warn("No colour defined for: ", repo.language);
    }

    const activity = isCreatedRepo(activityItem)
      ? "created a repository"
      : "starred";

    return {
      username: activityItem.actor.display_login,
      userId: activityItem.actor.id,
      repoPath: activityItem.repo.name,
      activity,
      timeSince: timeStampToRelativeTime(activityItem.created_at),
      repo: {
        language: repo.language,
        description: repo.description,
        stars: repo.stargazers_count,
        updated: `${month} ${day}`,
        languageColour: colour,
      },
    };
  });

  return { props: { feed: feedAsProps } };
}
