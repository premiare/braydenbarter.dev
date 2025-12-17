import { projects } from "../../../../@data/projects.js";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ project: string }> }
) {
  const { project } = await params;

  if (project) {
    const projectData = projects.find((p) => p.slug === project);
    if (projectData) {
      return Response.json(projectData);
    }
    return Response.json({ message: "Project not found" }, { status: 404 });
  }

  return Response.json({ message: "Project parameter required" }, { status: 400 });
}

