// userId={userId}
//       username={username}
//       activity={activity}
//       repoPath={repoPath}
//       timeSince={timeSince}
//       repo={{
//         description: repoDescription,
//         language: repoLanguage,
//         languageColour: repoLanguageColour,
//         stars: repoStars,
//         updated: repoUpdated,

const Card = ({ username, activity, repoPath, userId, timeSince }) => {
  return (
    <>
      <img src={`https://avatars.githubusercontent.com/u/${userId}`} />
      <p>
        {username} {activity} {repoPath}
      </p>
      <p>{timeSince}</p>
    </>
  );
};

export default Card;
