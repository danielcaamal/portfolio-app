"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./_components/ProjectCard";
import { PageTitle } from "../_components";

const projects = [
  {
    title: "Credit Calculator",
    releaseDate: "February 2025",
    description: "Creation of credit calculator. It allows users to calculate their credit amount, interest rate, and repayment term, as well as simulate different payment scenarios.",
    urls: ["/images/calculadora-credito/login.png"],
    githubUrl: "https://github.com/danielcaamal/credit-calculator",
    liveUrl: "https://credit-calculator-demo.vercel.app"
  },
  {
    title: "Assistant GPT",
    releaseDate: "January 2024",
    description: "Generation of AI-based virtual assistant generated as a demonstration of OpenAI's API capabilities. It allows users to interact with an advanced language model to get answers to questions and perform specific tasks.",
    urls: [
      "/images/assistant-gpt/generacion-imagen.png",
      "/images/assistant-gpt/edicion-imagen.png",
      "/images/assistant-gpt/edicion-con-matriz.png",
    ],
    githubUrl: "https://github.com/danielcaamal/assistant-gpt"
  },
  {
    title: "Data Engineering Pipeline",
    releaseDate: "July 2024",
    description: "Generating a DAG for loading data into a data warehouse. The DAG is responsible for extracting, transforming and loading data from different sources into the data warehouse, ensuring the integrity and quality of the data.",
    urls: [
      "/images/data-engineering/home.png",
      "/images/data-engineering/DAG.png",
    ],
    githubUrl: "https://github.com/danielcaamal/data-pipeline"
  },
  {
    title: "Financial App",
    releaseDate: "January 2025",
    description: "Mobile app and WEB for personal finance management. It allows users to keep track of their expenses, income and budgets, as well as generate reports and graphs to visualize their financial situation.",
    urls: [
      "/images/financial-app/app_content.png",
      "/images/financial-app/balance_page.png",
      "/images/financial-app/create_transaction_page.png",
      "/images/financial-app/installments_page.png",
      "/images/financial-app/partial_statement.png",
      "/images/financial-app/transactions_page.png",
    ],
    githubUrl: "https://github.com/danielcaamal/financial-app",
    liveUrl: "https://financial-app-demo.vercel.app"
  },
  {
    title: "Currie App",
    releaseDate: "January 2024",
    description: "Creation of a task and project management system for the company Currie. It allows users to create, assign, and track tasks, as well as manage projects efficiently.",
    urls: [
      "/images/currie/login.png",
      "/images/currie/home.png",
      "/images/currie/perfil.png",
      "/images/currie/ejecucion.png",
      "/images/currie/planeacion.png",
    ],
    githubUrl: "https://github.com/danielcaamal/currie-app"
  },
  {
    title: "Mi Cuenta Infonavit WEB",
    releaseDate: "February 2023",
    description: "Participation in the official Infonavit website for the consultation of the balance and movements of the worker's account. Among other functionalities.",
    urls: [
      "/images/micuenta/micuenta.png",
      "/images/micuenta/contacto.png",
      "/images/micuenta/precalificacion.png",
      "/images/micuenta/saldos1.png",
      "/images/micuenta/saldos2.png",
      "/images/micuenta/reestructuras.png",
    ],
    liveUrl: "https://micuenta.infonavit.org.mx"
  },
  {
    title: "SCAY",
    releaseDate: "August 2025",
    description: "Creation of a web application for the management of the SCAY company. It allows users to manage their employees, projects, procedures, payments and tasks.",
    urls: [
      "/images/scay/login.png",
      "/images/scay/home-admin.png",
      "/images/scay/users-management.png",
      "/images/scay/user-edit.png",
      "/images/scay/company-dashboard.png",
      "/images/scay/company-financial-dashboard.png",
      "/images/scay/company-financial-dashboard-2.png",
      "/images/scay/company-edit.png",
      "/images/scay/clients-table.png",
      "/images/scay/clients-table-filter.png",
      "/images/scay/client-overview.png",
      "/images/scay/client-detail.png",
      "/images/scay/projects-table.png",
      "/images/scay/project-create-edit.png",
      "/images/scay/procecudres-table.png",
      "/images/scay/procedure-create-edit.png",
      "/images/scay/payments-table.png",
      "/images/scay/activities-table.png",
      "/images/scay/catalogs.png",
    ],
    liveUrl: "https://scay.com.mx"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6">
      <PageTitle title="Projects" subtitle="A showcase of my work (I am not just a backend developer)" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {projects.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            releaseDate={project.releaseDate}
            description={project.description}
            urls={project.urls}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </motion.div>
    </div>
  );
}
