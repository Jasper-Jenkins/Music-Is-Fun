function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }
  //var songs;

  //Start coding here
  function draw(results){
    var songs = results;
    var template = ''
    for(var i = 0; i < 15; i++){
        var song = songs[i];
        console.log(songs[i])
        template +=`
           <div class="card song-style">
          <img src="${song.albumArt}" alt="">
          <div class="card-body">
            <h5 class="card-title">title: ${song.title}</h5>
            <p class="card-text">artist: ${song.artist}</p>
            <p class="card-text">collection: ${song.collection}</p>
            <p class="card-text">price: ${song.price}</p> 
            <p class="card-text"><small class="text-muted">Hey</small></p>
          </div>
          <audio id="player${i}" src=${song.preview}></audio>
          <div> 
            <button onclick="document.getElementById('player${i}').play(), app.controllers.itunesCtrl.pauseTunes(${i})">Play</button> 
            <button onclick="document.getElementById('player${i}').pause()">Pause</button> 
            <button onclick="document.getElementById('player${i}').volume += 0.1">Vol+ </button> 
            <button onclick="document.getElementById('player${i}').volume -= 0.1">Vol- </button> 
          </div>
        </div>
        `
     //  debugger
        document.getElementById('songs').innerHTML = template  
    }
  
    console.log(results)
  }
  
  
  this.pauseTunes = function pauseTunes(songsIndex){
   //debugger
    
    for(var i = 0;i<5;i++){
      //debugger
      if(i == songsIndex){
        document.getElementById(`player${songsIndex}`).play();
      }else{
        document.getElementById(`player${i}`).pause();
      }
        console.log("Hey figure this out already")
      // debugger
    } 
      
  }

  
}


//1 audio tag
//addEventListener
