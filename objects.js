var playlist = {
  name: 'Pop Smoke',
  song: 'What you know bout love'
}

function updatePlaylist(playlist, artist, songTitle){
playlist[artist] = songTitle
return playlist
}
var art = {Bruno: Treasure}

  updatePlaylist(art, 'floor','HAD ENOUGH' )

function removeFromPlaylist(playlist, artistName){
<<<<<<< HEAD

  delete playlist[artistName];
  return playlist
=======
  playlist = delete playlist.artistName;

>>>>>>> 759c3d8d41181c9538d67de337af815aa686604a
}
removeFromPlaylist()
