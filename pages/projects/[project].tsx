// pages/projects/[project].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    // Fetch project data based on the project name
    if (project) {
      // Perform your data fetching logic here, such as making an API request
      // to retrieve the project data using the project name
      const fetchData = async () => {
        try {
          // Example API call to fetch project data
          const response = await fetch(`/api/projects/${project}`);
          const data = await response.json();
          setProjectData(data);
        } catch (error) {
          console.error("Error fetching project data:", error);
        }
      };

      fetchData();
    }
  }, [project]);

  if (!projectData) {
    return <div>Loading project data...</div>;
  }

  return (
    <>
      <title>{projectData.title} | Brayden Barter</title>
      <h1 className="text-teal-300 text-lg font-bold">Project pages are WIP</h1>
      <div>
        <h1>Project Details</h1>
        <p>Project Name: {projectData.title}</p>
        <p>Project Description: {projectData.description}</p>
      </div>
    </>
  );
};

export default ProjectPage;
