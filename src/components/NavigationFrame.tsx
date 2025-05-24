
// DEPENDENCIES
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box'
import { NavLink } from "react-router";

interface NavigationFrameProps {
    children: React.ReactNode
}

function NavigationFrame({ children }: NavigationFrameProps) {

    const theme = useTheme();
    const frame = {
        xs: 50,
        sm: 70,
    };

    return (
        <Box
            sx={{
                display: 'grid',
                height: '100vh',
                width: '100vw',
                gridTemplateRows: `${frame.xs}px 1fr ${frame.xs}px`,
                gridTemplateColumns: `${frame.xs}px 1fr ${frame.xs}px`,
                [theme.breakpoints.up('sm')]: {
                    gridTemplateRows: `${frame.sm}px 1fr ${frame.sm}px`,
                    gridTemplateColumns: `${frame.sm}px 1fr ${frame.sm}px`,
                },
            }}
        >
            {/* top bar */}
            <Box
                gridRow="1"
                gridColumn="1 / span 3"
                bgcolor="common.white"
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                color={'black'}
                overflow={'hidden'}
            >
                <NavLink to="/">
                    <Typography variant='h5'>
                        Martin Benavides
                    </Typography>
                </NavLink>
            </Box>
            {/* left bar */}
            <Box
                gridRow="2"
                gridColumn="1"
                bgcolor="common.white"
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                color={'black'}
                overflow={'hidden'}
            >
                <NavLink to="/profile" >
                    <Typography
                        variant='h5'
                        sx={{
                            transform: 'rotate(-90deg)',
                            transformOrigin: 'center',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Profile
                    </Typography>
                </NavLink>
            </Box>
            {/* main content */}
            <Box
                gridRow="2"
                gridColumn="2"
                overflow="auto"
            >
                {children}
            </Box>
            {/* right bar */}
            <Box
                gridRow="2"
                gridColumn="3"
                bgcolor="common.white"
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                color={'black'}
                overflow={'hidden'}
            >
                <NavLink to="/projects" >
                    <Typography
                        variant='h5'
                        sx={{
                            transform: 'rotate(90deg)',
                            transformOrigin: 'center',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Projects
                    </Typography>
                </NavLink>
            </Box>
            {/* bottom bar */}
            <Box
                gridRow="3"
                gridColumn="1 / span 3"
                bgcolor="common.white"
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                color={'black'}
                overflow={'hidden'}
            >
                <NavLink to="/contact">
                    <Typography variant='h5'>
                        Contact
                    </Typography>
                </NavLink>
            </Box>
        </Box>
    );
}

export default NavigationFrame;