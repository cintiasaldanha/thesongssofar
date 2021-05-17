const Song = require("../models/Song");

module.exports = class SongService {
/**
 * Obtém a lista de músicas da trilha sonora de Supernatural.
 * Listar músicas da trilha sonora de Supernatural.
 
 **/	
 static async getSongs() {
    try {
      const allSongs = await Song.find();
      return allSongs;
    } catch (error) {
      console.log(`Could not fetch songs ${error}`);
    }
  }
  
/**
 * Cadastra uma música da trilha sonora de Supernatural.
 * Inclui uma música no cadastro.
 *
 * body SongItem Música a ser cadastrada. (optional)
 * jwt_token String Autenticação utilizando token jwt para acesso por usuário habilitado.
 * no response value expected for this operation
 **/
  static async addSong(data) {
    try {
      const newSong = {
        SongName: data.SongName,
		    ArtistName: data.ArtistName,
		    NumberEpisode: data.NumberEpisode,
	    	NameEpisode: data.NameEpisode, 
		    NumberSeason: data.NumberSeason,		
      };
      const response = await new Song(newSong).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
/**
 * Pesquisar música por ID
 * Retorna uma música da trilha sonora
 *
 * songId Long ID da música a ser retornada
 * returns SongItem
 **/  
    static async getSongById(SongId) {
    try {
      const song = await Song.findById({ _id: SongId });
      return song;
    } catch (error) {
      console.log(`Song not found. ${error}`);
    }
  }

  /**
 * Atualiza o cadastro de uma música da trilha sonora de Supernatural
 * 


  static async updateSong(SongId, song) {
    try {
      const updateResponse = await Song.updateOne({ _id: SongId },
        
      );

      return updateResponse;
    } catch (error) {
      console.log(`Could not update Song ${error}`);
    }
  }
 **/

/**
 * Exclui uma música da trilha sonora de Supernatural
 * Exclui uma música do cadastro.
 *
 * jwt_token String Autenticação utilizando token jwt para acesso por usuário habilitado.
 * songId Integer ID da música a ser excluída.
 * no response value expected for this operation
 **/
  static async delSong(SongId) {
    try {
      const deletedResponse = await Song.findOneAndDelete(SongId);
      return deletedResponse;
    } catch (error) {
      console.log(`Could not delete song ${error}`);
    }
  }
};
