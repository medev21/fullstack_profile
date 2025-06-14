// DEPENDENCIES
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface ProjectProps {
    label: string;
    href: string;
}

const projects: ProjectProps[] = [
    {
        label: 'weather app',
        href: 'https://medev21.github.io/weatherApp/'
    },
    {
        label: 'material UI components storybook',
        href: 'https://medev21.github.io/MUIReactComponents/',
    }
]

function ProjectsPage() {
    return(
        <Box
            component={'main'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            height={'100%'}
        >
            <List>
                {projects.map((item) => (
                    <ListItemButton
                        href={item.href}
                        target='_blank'
                        disableRipple
                    >
                        <ListItemText
                            sx={{
                                mr: 8,
                                textTransform: 'capitalize'
                            }}
                            primary={item.label}
                        />
                        <ListItemIcon
                            sx={{
                                alignItems: 'center',
                                minWidth: 0
                            }}
                        >
                            <ArrowOutwardIcon htmlColor='white'/>
                        </ListItemIcon>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}

export default ProjectsPage