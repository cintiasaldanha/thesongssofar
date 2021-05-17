const jwt = require("jsonwebtoken");
const TokenService = require("../services/TokenService");

exports.post = async (req, res, next) => {
  try {
    const createToken = await TokenService.createToken(req.body);
    
    switch (createToken){
      case 0:
        res.status(401).json({ error:'Verifique suas credenciais de acesso. Para esta operação é necessário ser administrador da aplicação.'});
        break;
      case 1 :
        res.status(401).json({ error:'Verifique suas credenciais de acesso. Para esta operação é necessário ser colaborador da aplicação.'});
        break;
      case 2:
        res.status(401).json({ error:'Usuário não habilitado para realizar esta operação.' });
        break;
      default:
        res.status(201).json(createToken);       
    }
   
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.authenticateToken = async (req,res,next) => {
  try{   
    //console.log("Início validação do Token"); 

    const authHeader = req.headers["authorization"];	
    //0 = Bearer, 1 = Token 
     const token = authHeader && authHeader.split(" ")[1];


     if (token == null) return res.sendStatus(401);
     
     jwt.verify(token,TokenService.getTokenSecret(),(err,decoded) => {       
       console.log(err);
       if (err) return res.sendStatus(403);
       console.error("Token válido! ");
       next();
     });
  }
  catch(error) {
    console.error("Erro: " + error);  
  }
};
