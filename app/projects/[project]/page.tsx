import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ project: string }>;
};

async function getProjectData(project: string) {
  try {
    // In Server Components, we can use absolute URLs or relative URLs
    // For production, use the environment variable, otherwise default to localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://127.0.0.1:3000";
    const response = await fetch(`${baseUrl}/api/projects/${project}`, {
      cache: "no-store",
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const projectData = await getProjectData(project);

  if (!projectData) {
    notFound();
  }

  return (
    <>
      <h1 className="text-teal-300 text-lg font-bold">Project pages are WIP</h1>
      <div>
        <h1>Project Details</h1>
        <p>Project Name: {projectData.title}</p>
        <p>Project Description: {projectData.description}</p>
      </div>
    </>
  );
}

