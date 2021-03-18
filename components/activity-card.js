const ActivityCard = ({ username, activity, repoPath, userId, timeSince }) => {
  return (
    <>
      <div className="tagline">
        <img
          width={32}
          height={32}
          src={`https://avatars.githubusercontent.com/u/${userId}?s=64&v=4`}
        />
        <div className="tagline-text">
          <p className="activity-sentance">
            <a className="tagline-link" href={`https://github.com/${username}`}>
              {username}
            </a>
            <span> {activity} </span>
            <a className="tagline-link" href={`https://github.com/${repoPath}`}>
              {repoPath}
            </a>
          </p>
          <p className="time-since">{timeSince}</p>
        </div>
      </div>
      <style jsx>{`
        .tagline-text {
          display: flex;
          align-items: center;
        }

        .time-since {
          color: rgb(106, 115, 125);
          font-size: 12px;
          margin-left: 4px;
        }

        .activity-sentance {
          font-size: 14px;
          color: rgb(36, 41, 46);
        }

        .tagline {
          display: flex;
          align-items: center;
        }

        .tagline-link {
          font-weight: 600;
          color: #24292e;
          text-decoration: none;
        }

        .tagline-link:visited {
          color: #24292e;
        }

        .tagline-link:hover {
          color: #0366d6;
        }

        img {
          border-radius: 50%;
          margin-right: 16px;
        }
      `}</style>
    </>
  );
};

export default ActivityCard;
