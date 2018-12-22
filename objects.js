var playlist = {
  'ArianaGrande': "Thank u Next",
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign({}, playlist, {artistName: songTitle})
  return playlist;
};

updatePlaylist(playlist, 'Slowdive', 'Alison');
updatePlaylis(playlist, 'My Bloody Valentine', 'Sometimes');
updatePlaylis(playlist, 'My Bloody Valentine', 'Sometimes');


const removeFromPlaylist = (playlist, artistName) => {
  delete playlist.artistName;
  return playlist;
};