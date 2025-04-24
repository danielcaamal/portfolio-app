import { ProjectCard } from "./_components/ProjectCard";
import { PageTitle } from "../_components";

export default function Projects() {
  return (
    <div className="max-w-full py-10">
      <PageTitle title="PROJECTS" subtitle="A showcase of my work" />
      <div className="container">
        <div className="flex flex-col items-center max-w-xl">
          <ProjectCard
            title="Credit Calculator"
            releaseDate="February 2025"
            description="Creation of credit calculator. It allows users to calculate their credit amount, interest rate, and repayment term, as well as simulate different payment scenarios."
            urls={["/images/calculadora-credito/login.png"]}
          />
          <ProjectCard
            title="Assistant GPT"
            releaseDate="Enero 2024"
            description="Generation of AI-based virtual assistant generated as a demonstration of OpenAI's API capabilities. It allows users to interact with an advanced language model to get answers to questions and perform specific tasks."
            urls={[
              "/images/assistant-gpt/generacion-imagen.png",
              "/images/assistant-gpt/edicion-imagen.png",
              "/images/assistant-gpt/edicion-con-matriz.png",
              "/images/assistant-gpt/edicion-con-matriz.png",
            ]}
          />
          <ProjectCard
            title="Data engineering"
            releaseDate="Julio 2024"
            description="Generacion de un DAG para la carga de datos en un data warehouse. El DAG se encarga de extraer, transformar y cargar datos desde diferentes fuentes hacia el data warehouse, asegurando la integridad y calidad de los datos."
            urls={[
              "/images/data-engineering/home.png",
              "/images/data-engineering/DAG.png",
            ]}
          />
          <ProjectCard
            title="Financial APP"
            releaseDate="January 2025"
            description="Mobile app and WEB for personal finance management. It allows users to keep track of their expenses, income and budgets, as well as generate reports and graphs to visualize their financial situation."
            urls={[
              "/images/financial-app/app_content.png",
              "/images/financial-app/balance_page.png",
              "/images/financial-app/create_transaction_page.png",
              "/images/financial-app/installments_page.png",
              "/images/financial-app/partial_statement.png",
              "/images/financial-app/transactions_page.png",
            ]}
          />
          <ProjectCard
            title="Currie App"
            releaseDate="January 2024"
            description="Creation of a task and project management system for the company Currie. It allows users to create, assign, and track tasks, as well as manage projects efficiently."
            urls={[
              "/images/currie/login.png",
              "/images/currie/home.png",
              "/images/currie/perfil.png",
              "/images/currie/ejecucion.png",
              "/images/currie/planeacion.png",
            ]}
          />
          <ProjectCard
            title="Mi Cuenta Infonavit WEB"
            releaseDate="February 2023"
            description="Participation in the official Infonavit website for the consultation of the balance and movements of the worker's account. Among other functionalities."
            urls={[
              "/images/micuenta/micuenta.png",
              "/images/micuenta/contacto.png",
              "/images/micuenta/precalificacion.png",
              "/images/micuenta/saldos1.png",
              "/images/micuenta/saldos2.png",
              "/images/micuenta/reestructuras.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
