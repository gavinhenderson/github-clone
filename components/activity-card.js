const Card = ({ username, activity, repoPath }) => {
  return (
    <p>
      {username} {activity} {repoPath}
    </p>
  );
};

export default Card;
