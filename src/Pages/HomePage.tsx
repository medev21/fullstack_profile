
// ASSETS
import { Typography } from "@mui/material";
import lonetree from "src/assets/videos/lonetree.mp4"
// DEPENDENCIES
import Box from '@mui/material/Box'
import { NavLink } from "react-router";

function HomePage() {
    return(
        <Box
            component={'main'}
            sx={{
                height: '100%',
                overflow: 'hidden',
                backgroundColor: 'white',
                color: 'black'
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: 'inherit',
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    id="vid"
                    style={{
                        height: 'inherit',
                        width: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                        opacity: 0.4,
                    }}
                >
					<source src={lonetree} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    width: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Software developer who enjoys finding solutions to complex problems in an elegant way.
                </Typography>
                <Typography variant="h6" mb={3}>
                    Enthusiastic, motivated, and high-performing team player who is passionate about software development.
                </Typography>
                <NavLink to='/profile'>
                    <Typography variant="h6">
                        View Profile
                    </Typography>
                </NavLink>
            </Box>
        </Box>
    )
}

export default HomePage