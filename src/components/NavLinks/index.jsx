import { MenuLink } from '../MenuLink';
import * as Styled from './styles';
import P from 'prop-types';


export const NavLinks = ({ links = [] }) => {
    return (
        <Styled.Container aria-label='Main menu'>
            {links.map((link) => (
                <MenuLink key={link.link} {...link} />
            ))}
        </Styled.Container>
    );
}

NavLinks.propTypes = {
    links: P.arrayOf(
        P.shape({
            children: P.string.isRequired,
            link: P.string.isRequired,
            newTab: P.bool,
        }),
    ),
};