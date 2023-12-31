import { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string, children: ReactNode }): JSX.Element => {
    const navigation = useLocation();
    const match = navigation.pathname.includes(to);

    return (
        <Link to={to} style={{ color: match ? 'var(--stroke-color-active)' : 'var(--font-color-digits)' }}>
            {children}
        </Link>
    );
}

export default NavLink;