import {Card, CardActions, CardContent, CardHeader, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import "./projCard.css";

const ProjectCard = ({data}) => {
    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        if (like) {
            setLike(false);
            window.localStorage.setItem("card-" + data.key, false);
        } else {
            setLike(true);
            window.localStorage.setItem("card-" + data.key, true);
        }
    }

    const handleOpenClick = () => {
        window.open(data.gitLink)
    }

    useEffect(() => {
        const liked = window.localStorage.getItem("card-" + data.key);

        if (liked === "true")
            setLike(true);
    }, [data.key]);

    return (
        <Card sx={{maxWidth: 345, bgcolor: "#2C303A", borderBottom: "4px solid", borderBottomColor: data.borderColor, width: "310px"}}
              elevation={6} data-aos="zoom-in" className={"cardEffect"}>
            <CardHeader sx={{color: "primary.main"}} data-aos="zoom-in-left"
                avatar={
                    <FolderOpenIcon sx={{color: "#fff", fontSize: "32px"}}/>
                }

                title={data.nome}
            />
            <Box sx={{marginLeft: "15px"}} data-aos="zoom-in-left">
                {
                    data.languages.map(len => {
                        return (
                            <Chip variant="outlined" color={"primary"} sx={{color: "#b9b6b6", marginRight: "8px", marginBottom: "8px"}}
                                  size={"small"} label={len} key={len}/>
                        )
                    })
                }
            </Box>
            <CardContent data-aos="zoom-in-left">
                <Typography variant="body2" color="#fff">
                    {data.descrizione}
                </Typography>
            </CardContent>
            <CardActions disableSpacing data-aos="zoom-in-left">
                <IconButton aria-label="Like" onClick={handleLikeClick}>
                    {   like ?
                        <FavoriteIcon sx={{color: "#fff", fill: "#ff0000"}}/>
                        :
                        <FavoriteBorderIcon sx={{color: "#fff"}}/>
                    }
                </IconButton>
                <IconButton aria-label="View" onClick={handleOpenClick}>
                    <OpenInNewIcon sx={{color: "#fff"}}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;