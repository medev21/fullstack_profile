// ROUTES
import AppRoutes from "./AppRoutes";

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