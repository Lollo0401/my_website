import "aos/dist/aos.css";

import {useEffect, useState} from "react";
import {
    Alert,
    createTheme,
    Divider,
    Icon,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuList, Slide,
    Snackbar,
    ThemeProvider
} from "@mui/material";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import NotFoundPage from "./page/NotFoundPage";
import Home from './page/Home';
import AOS from "aos";
import Projects from "./page/Projects";
import Skills from "./page/Skills";
import MenuItem from "@mui/material/MenuItem";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
//import Wip from "./page/Wip";

function App() {
    const [loading, setLoading] = useState(false);
    const [contextMenu, setContextMenu] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#40CE7F'
            }
        }
    });

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX - 2,
                    mouseY: event.clientY - 4,
                }
                : null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const openGithub = () => {
        window.open("https://github.com/Lollo0401", "_blank");
        handleClose();
    }

    const forwardClick = () => {
        window.history.forward();
        handleClose();
    }

    const backClick = () => {
        window.history.back();
        handleClose();
    }

    const copyLink = () => {
        setAlertOpen(true)
        handleClose();

        navigator.clipboard.writeText(window.location.href).then(r => {
            setAlertOpen(true)
        }, e => {
            console.log(e);
        });

        setInterval(() => {
            setAlertOpen(false)
        }, 4500);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            document.body.style.overflowX = "hidden";
        }, 2800)
    }, []);


    return (
        <div onContextMenu={handleContextMenu} className={"mainDiv"}>
            <ThemeProvider theme={theme}>
                {
                    loading ?
                        <Loader/>
                        :
                        <Router>
                            <Navbar/>
                            <Routes>
                                <Route exact path="/" element={<Home/>}/>
                                <Route exact path="/skills" element={<Skills/>}/>
                                <Route exact path="/projects" element={<Projects/>}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                        </Router>
                }

                <Menu
                    sx={{outline: 'none'}}
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                        contextMenu !== null
                            ? {top: contextMenu.mouseY, left: contextMenu.mouseX}
                            : undefined
                    }
                >
                    <MenuList sx={{outline: 'none'}}>
                        <MenuItem onClick={forwardClick}>
                            <ListItemIcon>
                                <ArrowForwardIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Forward</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={backClick}>
                            <ListItemIcon>
                                <ArrowBackIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Back</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={copyLink}>
                            <ListItemIcon>
                                <ContentCopyIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>Copy Link</ListItemText>
                        </MenuItem>
                        <Divider sx={{width: "100%"}}/>
                        <MenuItem onClick={openGithub}>
                            <ListItemIcon>
                                <GitHubIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText>GitHub</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Menu>

                <Snackbar open={alertOpen} autoHideDuration={4500}>
                    <Alert severity="success" sx={{ width: '100%' }}>
                        Link copied to clipboard!
                    </Alert>
                </Snackbar>

            </ThemeProvider>
        </div>
    );
}
export default App;