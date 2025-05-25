// ASSSETS
import resume from 'src/assets/resume.svg'
// DEPENDENCIES
import Box from '@mui/material/Box'

function ProfilePage() {
    return(
        <Box
            component={'main'}
            sx={{
                overflow: 'auto',
                paddingX: 5,
            }}
        >

            <Box
                component="img"
                src={resume}
                alt="My Resume"
                sx={{
                    display: 'block',  // removes inline‐img whitespace
                    width: '100%',     // scale to full width of frame
                    height: 'auto',    // preserve aspect ratio & natural height
                }}
            />
        </Box>
    )
}

export default ProfilePage