// ASSETS
import comingSoonImg from 'src/assets/comingSoon.svg'
// DEPENDENCIES
import Box from '@mui/material/Box'

export function ComingSoon() {
    return(
        <Box
            height={'100%'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box
                component="img"
                src={comingSoonImg}
                alt="coming soon img"
            />
        </Box>
    )
}