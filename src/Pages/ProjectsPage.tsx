// COMPONENTS
import { ComingSoon } from 'src/components/ComingSoon';
// DEPENDENCIES
import Box from '@mui/material/Box';

function ProjectsPage() {
    return(
        <Box
            component={'main'}
            height={'100%'}
        >
            <ComingSoon />
        </Box>
    )
}

export default ProjectsPage