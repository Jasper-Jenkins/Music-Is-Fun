function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  //var songs;

  //Start coding here
  function draw(results) {
    var songs = results;
    var template = ''
    for (var i = 0; i < 25; i++) {
      var song = songs[i];
      console.log(songs[i])
      template += `
           <div class="card song-style">
            <img src="${song.albumArt}" alt="">
            <div class="card-body">
              <h5 onclick="document.getElementById('player${i}').play(), app.controllers.itunesCtrl.pauseTunes(${i})" class="card-title">title: ${song.title}</h5>
              <p class="card-text">artist: ${song.artist}</p>
              <p class="card-text">collection: ${song.collection}</p>
              <p class="card-text">price: ${song.price}</p> 
            </div>
            <audio id="player${i}" src=${song.preview}></audio>
            <div class="d-flex flex-row justify-content-around"> 
              <div onclick="document.getElementById('player${i}').play(), app.controllers.itunesCtrl.pauseTunes(${i})"><i class="fas fa-play"></i></div> 
              <div onclick="document.getElementById('player${i}').pause()"><i class="fas fa-pause"></i></div> 
              <div onclick="document.getElementById('player${i}').volume += 0.1"><i class="fas fa-volume-up">Vol+</i></div>  
              <div onclick="document.getElementById('player${i}').volume -= 0.1"><i class="fas fa-volume-down">Vol-</i></div> 
            </div>
        </div>
        `
      //  debugger
      document.getElementById('songs').innerHTML = template
    }

    console.log(results)
  }


  this.pauseTunes = function pauseTunes(songsIndex, listOfSongs) { //songsIndex:number, listOfSongs:arry
    //debugger

    for (var i = 0; i < 25; i++) {
      //debugger
      if (i == songsIndex) {
        document.getElementById(`player${songsIndex}`).play();
      } else {
        document.getElementById(`player${i}`).pause();
      }
      console.log("Hey figure this out already")
      // debugger
    }

  }


}


//1 audio tag
//addEventListener
