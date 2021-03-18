const timeStampToRelativeTime = (inputTimeStamp) => {
  const timeStamp = new Date(inputTimeStamp);
  const now = new Date();
  const secondsPast = (now.getTime() - timeStamp) / 1000;
  // Less than a minute we say in seconds
  if (secondsPast < 60) {
    return parseInt(secondsPast) + ' seconds ago';
  }
  // Less than an hour we say in minutes
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + ' minutes ago';
  }
  // Less than 24 hours we say hours
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + ' hours ago';
  }
  // Less than 48 hours we say yesterday
  if (secondsPast <= 172800) {
    return 'yesterday';
  }

  return parseInt(secondsPast / 86400) + ' days ago';
};

export default timeStampToRelativeTime;
