import Typography from "@mui/material/Typography";
import SkillCard from "../components/skillCard/SkillCard";
import {Grid} from "@mui/material";
import "./css/skills.css";

const programmingLanguages = [
    {
        nome: "JavaScript",
        descrizione: "Advanced knowledge in JavaScript",
        progressBar: 80,
        img: "/img/progLogi/js.png"
    },
    {
        nome: "NodeJS",
        descrizione: "Good back-end development skills",
        progressBar: 70,
        img: "/img/progLogi/nodejs.png"
    },
    {
        nome: "C#",
        descrizione: "Base skills in building desktop apps with C#",
        progressBar: 65,
        img: "/img/progLogi/Csharp.png"
    },
    {
        nome: "Java",
        descrizione: "Intermediate knowledge in Java",
        progressBar: 60,
        img: "/img/progLogi/java.png"
    },
    {
        nome: "React",
        descrizione: "Good knowledge in React",
        progressBar: 60,
        img: "/img/progLogi/react.png"
    },
    {
        nome: "CSS",
        descrizione: "Advanced knowledge in CSS",
        progressBar: 70,
        img: "/img/progLogi/css.png"
    }
];

function Skills() {
    return (
        <>
            <Typography
                sx={{fontWeight: "bold", textAlign: "center", fontSize: "40px", marginTop: "35px", color: "primary.main"}}>
                SKILLS & EXPERIENCES
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={{xs: 1, sm: 2, md: 3}} className={"cardGrid"} sx={{
                marginTop: "10px",
                marginBottom: "80px",
                display: "flex",
                justifyContent: "center"
            }}>
                {
                    programmingLanguages.map(prog => {
                        return (
                            <Grid item xs={6} key={prog.nome} sx={{display: "flex"}} className={"cardContainer"}>
                                <SkillCard data={prog}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    );
}

export default Skills;