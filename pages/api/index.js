import humanIdGenerator from "human-readable-ids"

const humanId = humanIdGenerator.hri.random

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json")
  if (req.method === "GET") {
    res.status(200).json({ hello: humanId() })
  }
}
