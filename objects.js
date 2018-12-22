var playlist = {
  ArianaGrande: "Thank U Next",
  KaceyMusgraves: "Golden Hour",
  TaylorSwift: "Red",
  Drake: "Views"
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign({}, playlist, {artistName: songTitle})
  return playlist;
};

const removeFromPlaylist = (playlist, artistName) => {
  delete 
  return playlist;
};