// ROUTES
import AppRoutes from "src/AppRoutes";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
    return(
        <>
            <AppRoutes />
            {children}
        </>
    )
}

export default Layout;