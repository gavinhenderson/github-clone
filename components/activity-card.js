import Star from "./star";

const ActivityCard = ({
  username,
  activity,
  repoPath,
  userId,
  timeSince,
  repo: { description, language, stars, updated, languageColour },
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
          <span className="color-circle"></span>
          <span className="language">{language}</span>
          <Star />
          <span className="stars">{stars}</span>
          <span className="updated">Updated {updated}</span>
        </div>
      </div>
      <style jsx>{`
        .color-circle {
          display: inline-block;
          background-color: ${languageColour};
          width: 12px;
          height: 12px;
          border: 1px solid rgba(27, 31, 35, 0.1);
          border-radius: 50%;
        }

        .language {
          color: rgb(88, 96, 105);
          font-size: 12px;
          margin-right: 16px;
          margin-left: 4px;
        }

        .stars {
          color: rgb(88, 96, 105);
          font-size: 12px;
          margin-right: 16px;
          margin-left: 4px;
        }

        .updated {
          color: rgb(88, 96, 105);
          font-size: 12px;
        }

        .repo-info-row {
          display: flex;
          align-items: center;
          marin-top: 8px;
        }

        .repo-description {
          font-size: 14px;
          color: rgb(88, 96, 105);
          margin: 4px 0 10px 0;
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

        .tagline-text > p {
          margin-top: 0px;
          margin-bottom: 0px;
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
          margin-bottom: 4px;
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
