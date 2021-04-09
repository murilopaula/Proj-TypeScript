import { Router, Response, Request } from "express";
import { CicloController } from "../controllers/CicloController"

const router = Router();
const cicloController = new CicloController();

router.get("/", cicloController.listar); /* Index do Projeto */
router.get("/ciclo/listaPorId", cicloController.listaPorId); /* Lista a partir do ID */
router.get("/ciclo/cadastrar", cicloController.cadastrar); /* Cadastrar o ciclo de pagamento */

export { router };