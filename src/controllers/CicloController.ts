import { Request, Response } from "express";

class CicloController{

    listar (req: Request, res: Response){
        res.send("Hello World!!!!!!!!!!!!!!!!!!!!!!! piroca cabiluda");
    }

    listaPorId (req: Request, res: Response) {
        res.send("tem q aprender a mandar outro parametro seu cu de bosta");
    }

    cadastrar (req: Request, res: Response) {
        res.send("cadastra algo ai sem banco de dados o fodão");
    }

}

export { CicloController };