

  SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
  });
  function newSong() {
    let Genre = prompt("Enter The Song Name or Singer Name");
    
    SC.get('/tracks', {
        q: Genre
      })
      .then(function(tracks) {
        let input = prompt(`Choose a Number From 0 to ${tracks.length-1}`);
        let currentSong = tracks[input];
        document.getElementById("songTitle").innerHTML = currentSong.title;
 
        SC.stream('/tracks/' + currentSong.id).then(function(player) {
          var play = document.getElementById("play").addEventListener("click", () => player.play());
          document.getElementById("pause").addEventListener("click", () => player.pause());
          document.getElementById("stop").addEventListener("click", () => player.pause());
          document.getElementById("stop").addEventListener("click", () => player.seek(0));
        })
      });
  

// function setVolume (vol){
//   var player = tracks[currentTrack.id];
//   player.volume = val /100;
//   console.log("After:" + player.volume);
//   player[currentTrack.id].setVolume(player.volume);
// }



  }


  newSong();

  document.getElementById("newSong").addEventListener("click", () => newSong() );


