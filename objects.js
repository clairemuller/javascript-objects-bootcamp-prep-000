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


/*
  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })

    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

      expect(playlist).
        to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })
  })
*/



const removeFromPlaylist = (playlist, artistName) => {
  delete playlist.artistName;
  return playlist;
};