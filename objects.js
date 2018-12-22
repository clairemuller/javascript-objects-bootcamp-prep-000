const playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
};


const updatePlaylist = (playlist, artistName, songTitle) => {
  Object.assign(playlist, {artistName: songTitle})
  return playlist;
};

/*
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
*/


const removeFromPlaylist = (playlist, artistName) => {
  delete playlist.artistName;
  return playlist;
};