import React from "react";
import { getAllProjects } from "../services/projectService";
import { Box, Container } from "@mui/material";
import type { Project } from "../types/project";
export default function ProjectsPage() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAllProjects();
        setProjects(response);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <Container
      sx={{
        padding: "2rem",
        margin: "0 auto",
        width: "auto",
        textAlign: "center",
        alignItems: "center",
        border: "1px solid #eee",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {projects.map((project) => (
        <Box
          sx={{
            margin: "1rem 0",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            textAlign: "left",
          }}
          key={project.id}
        >
          <h2>Project Name: {project.name}</h2>
        </Box>
      ))}
    </Container>
  );
}
