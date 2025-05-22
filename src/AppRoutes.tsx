// DEPENDENCIES
import { Route, Routes} from 'react-router';
// PAGES
import ContactsPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';

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