// DEPENDENCIES
import { Route, Routes} from 'react-router';
// PAGES
import ContactsPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ProjectsPage from './Pages/ProjectsPage';

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