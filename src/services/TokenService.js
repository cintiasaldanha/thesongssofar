const jwt = require("jsonwebtoken");
const TOKEN_SECRET= 'SAVING-PEOPLE-HUNTING-THING-THE-FAMILY-BUSINESS';

module.exports = class TokenService {

/**
 * Obtém o token JWT para autenticação nos métodos fechados da API
 * Obter o token JWT para autenticação nos métodos de inclusão e exclu músicas no cadastro.
 *
 * body TokenCredentials Música a ser cadastrada. (optional)
 * no response value expected for this operation
 **/

  static getTokenSecret() {
    try {
      return TOKEN_SECRET;
    } catch (error) {
      console.log(`Erro ao retornar segredo JWT`);
    }
  }

  static generateAccessToken(userClaims){
      try{
        return jwt.sign(userClaims, TOKEN_SECRET, {expiresIn: "180s"});
      }
     catch (error) {
        console.log(`Erro ao gerar Access Token:` + error);
      }

  }

  static async createToken(data) {
    try {
       if (data.username == 'dean' && data.role != 'admin'){
        return 0  
        //0 = 'Verifique suas credenciais de acesso. Para esta operação é necessário ser administrador da aplicação.'
       }
       else if (data.username == 'castiel' && data.role != 'colab'){
         return 1
        //1 = 'Verifique suas credenciais de acesso. Para esta operação é necessário ser colaborador da aplicação.'
       }
       else if (data.username != 'dean' && data.username != 'castiel'){
         return 2 
        // 2 = 'Usuário não habilitado para realizar esta operação.'
       }

        const token = TokenService.generateAccessToken({
            username: data.username,
            role: data.role,                   
           });

           console.log("Token Gerado:", token);
           
           return token;

    } catch (error) {
      console.log(error);
    }
  }
  
};
