const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = Schema({
  SongName: {
    type: String,
    required: true,
  },

  ArtistName: {
    type: String,
    required: true,
  },

  NumberEpisode: {
    type: String,
    required: true,
  },

  NameEpisode: {
    type: String,
    required: true,
  },
  
  NumberSeason: {
    type: String,
    required: true,
  },
});

module.exports = Song = mongoose.model("song", songSchema);
