import axios from "axios";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const urlNota = "https://www.webdanfe.com.br/danfe/exemplos/NFe_assinada.xml";

  const response = await axios.get(urlNota, { timeout: 6000 });
  console.log(response);

  res.send("see the console");
});

export { router };
