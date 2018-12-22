var playlist = {
  Slowdive: "Alison",
  My: "Golden Hour",
  TaylorSwift: "Red",
  Drake: "Views"
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign({}, playlist, {artistName: songTitle})
  return playlist;
};

const removeFromPlaylist = (playlist, artistName) => {
  delete playlist.artistName;
  return playlist;
};