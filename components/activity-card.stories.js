import ActivityCard from "./activity-card";

export default {
  title: "ActivityCard",
  component: ActivityCard,
};

export const StarredRepo = () => {
  return (
    <ActivityCard
      username="Gavin Henderson"
      activity="starred"
      repoPath="gavinhenderson/gavinhenderson.me"
    ></ActivityCard>
  );
};
