const jwt = require("jsonwebtoken");
const SongService = require("../services/SongService");


exports.get = async (req, res, next) => {
  try {
    const songs = await SongService.getSongs();
    if (!songs) {
      return res.status(404).json("Música não encontrada");
    }
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getById = async (req, res, next) => {
  let id = req.params.id;

  try {
    const song = await SongService.getSongById(id);
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.post = async (req, res, next) => {
  try {
    const createdSong = await SongService.addSong(req.body);
    res.status(201).json(createdSong);
  } catch (error) {
    res.status(500).json({ error: error })
    console.error("Erro: " + error);
  }
};
/*
exports.put = async (req, res, next) => {
  let id = req.params.id;

  try {
    const song = {};
	song.SongName = req.body.SongName;
	song.ArtistName = req.body.ArtistName;
	song.NumberEpisode = req.body.NumberEpisode;
	song.NameEpisode = req.body.NameEpisode;
	song.NumberSeason  = req.body.NumberSeason;
	
    const updatedSong = await SongService.updateSong(id, song);

    if (updatedSong.nModified === 0) {
      return res.status(404).json({});
    }

    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
*/

exports.delete = async (req, res, next) => {
  let id = req.params.id;

  try {
    const deleteResponse = await SongService.delSong(id);
    res.json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


