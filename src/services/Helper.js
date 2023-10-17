let latestRemoteMessage = null;

export const setLatestRemoteMessage = (remoteMessage) => {
  latestRemoteMessage = remoteMessage;
};

export const getLatestRemoteMessage = () => {
  return latestRemoteMessage;
};  