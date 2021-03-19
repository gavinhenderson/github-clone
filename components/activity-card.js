import Star from './star';

const ActivityCard = ({
  username,
  activity,
  repoPath,
  userId,
  timeSince,
  repo: { description, language, stars, updated },
}) => {
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
      <div className="repo-card">
        <a className="tagline-link" href={`https://github.com/${repoPath}`}>
          {repoPath}
        </a>
        <p className="repo-description">{description}</p>
        <div className="repo-info-row">
          <div>
            <span className="color-circle"></span>
            <p className="language">{language}</p>
          </div>
          <div>
            <Star />
            <p className="stars">{stars}</p>
          </div>
          <p className="updated">Updated {updated}</p>
        </div>
      </div>
      <style jsx>{`
        .color-circle {
          display: inline-block;
          background-color: #f1e05a;
          width: 12px;
          height: 12px;
          border: 1px solid rgba(27, 31, 35, 0.1);
          border-radius: 50%;
        }

        .language {
          color: rgb(88, 96, 105);
          font-size: 12px;
        }

        .stars {
          color: rgb(88, 96, 105);
          font-size: 12px;
        }

        .updated {
          color: rgb(88, 96, 105);
          font-size: 12px;
        }

        .repo-info-row {
          display: flex;
        }

        .repo-description {
          font-size: 14px;
          color: rgb(88, 96, 105);
        }

        .repo-card {
          background-color: rgb(255, 255, 255);
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          padding: 16px;
        }

        .repo-card > .tagline-link {
          font-size: 16px;
        }

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
