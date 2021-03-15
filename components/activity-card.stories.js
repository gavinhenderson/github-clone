import ActivityCard from './activity-card';

export default {
  title: 'ActivityCard',
  component: ActivityCard,
  argTypes: {
    username: { control: 'text', defaultValue: 'gavinhenderson' },
    activity: {
      control: {
        type: 'select',
        options: ['starred'],
      },
      defaultValue: 'starred',
    },
    repoPath: {
      control: 'text',
      defaultValue: 'gavinhenderson/gavinhenderson.me',
    },
    timeSince: {
      control: 'text',
      defaultValue: '2 hours ago',
    },
    repoDescription: {
      control: 'text',
      defaultValue: 'Library to get first day of week.',
    },
    repoLanguage: {
      control: 'text',
      defaultValue: 'Typescript',
    },
    repoLanguageColour: {
      control: {
        type: 'color',
      },
      defaultValue: 'rgba(43,116,137, 1)',
    },
    repoStars: {
      control: 'number',
      defaultValue: 1,
    },
    repoUpdated: {
      control: 'text',
      defaultValue: 'Mar 15',
    },
    userId: {
      control: 'text',
      defaultValue: '1359202',
    },
  },
};

export const RepoActivity = ({
  username,
  userId,
  activity,
  repoPath,
  timeSince,
  repoDescription,
  repoLanguage,
  repoLanguageColour,
  repoStars,
  repoUpdated,
}) => {
  return (
    <ActivityCard
      userId={userId}
      username={username}
      activity={activity}
      repoPath={repoPath}
      timeSince={timeSince}
      repo={{
        description: repoDescription,
        language: repoLanguage,
        languageColour: repoLanguageColour,
        stars: repoStars,
        updated: repoUpdated,
      }}
    ></ActivityCard>
  );
};
