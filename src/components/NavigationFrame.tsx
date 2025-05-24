
// DEPENDENCIES
import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box'
import { NavLink } from "react-router";

interface NavigationFrameProps {
    children: React.ReactNode
}

function NavigationFrame({ children }: NavigationFrameProps) {

	// handleToggleClick(){
	// 	this.props.onClick();
	// }


    // let iconCondition = this.props.iconCondition;

    // TODO: MOVE THIS SOMEWHERE ELSE
    const theme = useTheme();
    // responsive frame width: 50px on xs, 70px on sm+
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
            >
                <NavLink to="/">
                    Martin Benavides
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
            >
                <NavLink to="/profile" >
                    <Typography
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
            {/* <Box
				gridRow="2"
				gridColumn="2"
				sx={{
					position: 'relative',
					overflow: 'hidden',     // clip _any_ child that spills
				}}
			>
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%',
						overflowY: 'auto',
						overflowX: 'hidden',
					}}
				>
					{children}
				</Box>
			</Box> */}
            {/* right bar */}
            <Box
                gridRow="2"
                gridColumn="3"
                bgcolor="common.white"
                alignItems={'center'}
                justifyContent={'center'}
                display={'flex'}
                color={'black'}
            >
                <NavLink to="/projects" >
                    <Typography
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
            >
                <NavLink to="/contact" >
                    Contact
                </NavLink>
            </Box>
        </Box>
    );
}

export default NavigationFrame;