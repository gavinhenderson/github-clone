/**
 * Source: https://github.com/vercel/next-learn-starter/blob/master/learn-starter/pages/index.js
 */

import Head from 'next/head';
import getTimeline from '../lib/get-timeline';
import config from '../lib/config';
import ActivityCard from '../components/activity-card';
import timeStampToRelativeTime from '../lib/timestamp-to-relative-time';

export default function Home({ feed }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {feed.map(({ username, userId, repoPath, activity, timeSince }) => {
          return (
            <ActivityCard
              key={`${username}-${repoPath}-${activity}`}
              username={username}
              activity={activity}
              repoPath={repoPath}
              userId={userId}
              timeSince={timeSince}
            ></ActivityCard>
          );
        })}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const feed = await getTimeline({
    githubToken: config.githubToken,
    username: config.username,
  });

  const filterActivities = (activityItem) => {
    const isWatchEvent = activityItem.type === 'WatchEvent';
    const isStarEvent = activityItem.payload.action === 'started';
    return isWatchEvent && isStarEvent;
  };

  const feedAsProps = feed.filter(filterActivities).map((activityItem) => {
    return {
      username: activityItem.actor.display_login,
      userId: activityItem.actor.id,
      repoPath: activityItem.repo.name,
      activity: 'starred',
      timeSince: timeStampToRelativeTime(activityItem.created_at),
    };
  });

  if (feedAsProps.length !== feed.length) {
    console.warn(
      'You dropped some events',
      feed.filter((activity) => !filterActivities(activity))
    );
  }

  return { props: { feed: feedAsProps } };
}
