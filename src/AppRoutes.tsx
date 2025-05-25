// DEPENDENCIES
import { Route, Routes} from 'react-router';
// PAGES
import ContactsPage from 'src/pages/ContactPage';
import HomePage from 'src/pages/HomePage';
import ProfilePage from 'src/pages/ProfilePage';
import ProjectsPage from 'src/pages/ProjectsPage';

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="projects" element={<ProjectsPage />} />
        </Routes>
    )
}

export default AppRoutes