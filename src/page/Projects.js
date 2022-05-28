import ProjectCard from "../components/projCard/Card";
import {Grid} from "@mui/material";
import "./css/project.css"
import Typography from "@mui/material/Typography";

const projectsList = [
    {
        key: "1",
        nome: "My Website",
        languages: ["ReactJS", "JS", "CSS"],
        descrizione: "This is my website built with ReactJS and CSS",
        gitLink: "https://github.com/Lollo0401/my_website",
        borderColor: "#c40808"
    }
];

function Projects() {
    return (
        <>
            <Typography sx={{fontWeight: "bold", textAlign: "center", fontSize: "40px", marginTop: "35px", color: "primary.main"}}>
                SOME OF MY PROJECTS
            </Typography>
            <div className={"cardMain"}>
                <Grid container spacing={4} className={"mainGrid"}>
                    { 
                        projectsList.map(proj => {
                            return (
                                <Grid item xs={6} md={4} className={"cardContainer"} key={proj.key}>
                                    <ProjectCard data={proj}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    );
}

export default Projects;