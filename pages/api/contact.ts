import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  console.log(req.body);
  res.status(201).send("OK");
};

export default handler;
