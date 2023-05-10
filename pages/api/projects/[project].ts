import { projects } from "../../../@data/projects.js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { project } = req.query;

  if (project) {
    const projectData = projects.find((p) => p.slug === project);
    if (projectData) {
      return res.status(200).json(projectData);
    }
    return res.status(404).json({ message: "Project not found" });
  }
}
