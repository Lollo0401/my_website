import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from '@mui/material/LinearProgress';
import "./skills.css";

const SkillCard = ({data}) => {

    return (
        <Card data-aos="zoom-out-right" sx={{
            display: 'flex',
            justifyContent: "space-between",
            maxWidth: "450px",
            bgcolor: "#2C303A",
            color: "primary.main"
        }} elevation={6} className={"cardEff"}>
            <Box sx={{display: 'flex', flexDirection: 'column'}} data-aos="zoom-in-up">
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {data.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="white" component="div">
                        {data.descrizione}
                    </Typography>
                </CardContent>
                <Box sx={{ pl: 1, pb: 1}}>
                    <LinearProgress value={data.progressBar} color={"secondary"} variant="determinate" />
                </Box>
            </Box>
            <CardMedia className={"cardImage"}
                       component="img"
                       image={data.img}
                       alt={data.nome}
            />
        </Card>
    );
}

export default SkillCard;