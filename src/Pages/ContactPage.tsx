// DEPENDENCIES
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface ContactItemProps {
    href: string,
    label: string,
    icon: React.ReactNode,
}

const contactItems: ContactItemProps[] = [
    {
        label: 'linkedin',
        icon: <LinkedInIcon htmlColor="white"/>,
        href: 'https://www.linkedin.com/in/medev21/',
    },
    {
        label: 'github',
        icon: <GitHubIcon htmlColor="white"/>,
        href: 'https://github.com/medev21',
    },
    {
        label: 'email',
        icon: <EmailIcon htmlColor="white"/>,
        href: 'mailto:martinbendevelops@gmail.com?subject=Hello'
    },
]

function ContactsPage() {
    return(
        <Box
            component={'main'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            height={'100%'}
        >
            <Typography
                variant='h3'
                mb={3}
                textTransform={'capitalize'}
            >
                let's stay in touch!
            </Typography>

            <List>
                {contactItems.map((item) => (
                    <ListItemButton
                        sx={{
                            border: '1px solid white',
                            mb: 3,
    
                        }}
                        disableRipple
                        href={item.href}
                        target='_blank'
                    >
                        <ListItemIcon
                            sx={{
                                alignItems: 'center',
                                minWidth: 0
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                mx: 8,
                                textAlign: 'center',
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

export default ContactsPage