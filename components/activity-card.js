const ActivityCard = ({ username, activity, repoPath, userId, timeSince }) => {
  return (
    <>
      <img src={`https://avatars.githubusercontent.com/u/${userId}`} />
      <p>
        {username} {activity} {repoPath}
      </p>
      <p>{timeSince}</p>
      <style jsx>{`
        p {
          font-size: 100px;
        }
      `}</style>
    </>
  );
};

export default ActivityCard;
