import './presentation.css';
import {Grid} from "@mui/material";
import avatar from "../../assets/img/avatar.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";


const Presentation = () => {
    return (
        <Box sx={{justifyContent: 'center', display: "flex", marginLeft: "10%", marginTop: "40px", width: "80%"}}
             data-aos="fade-right">
            <Grid container spacing={2} columns={16} className={"box"}>
                <Grid item xs={8} className={"grid-left"}
                      sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <div>
                        <h2 className={"txtPt1"}>HI THERE 👋 I'M </h2>
                        <h2 className={"txtPt2"}><p
                            className="text--glitch"
                            data-text="Lorenzo Pogliani"
                        >
                            Lorenzo Pogliani
                        </p></h2>
                        <h2 className={"txtPt3"}>Back-End/software developer</h2>
                        <h4 className={"descr"}>I'm 18 years old developer, I really like <span
                            className={"hlTxt4"}>software</span> and <span
                            className={"hlTxt4"}>server side</span> development</h4>
                        <div className={"projBtn"}>
                            <Link className={"projLink"} to={"/projects"}><Button variant="outlined">My Projects</Button></Link>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}
                      sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <img src={avatar} alt="banner" width={"512px"} className={"avatar"}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Presentation;