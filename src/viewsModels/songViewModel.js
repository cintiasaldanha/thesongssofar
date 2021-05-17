module.exports = function toViewModel(model) {
    return {
      songName: model.songName, 
      artistName: model.artistName,
      numberEpisode: model.numberEpisode,
      nameEpisode: model.nameEpisode, 
      numberSeason: model.numberSeason, 
    };
  };
  