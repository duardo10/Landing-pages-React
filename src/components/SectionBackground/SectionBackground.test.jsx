import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme'
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
    it('should render width background dark', () => {
        const {container} = renderTheme(
            <SectionBackground background={true}>
                <h1>Children</h1>
            </SectionBackground>
        );
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should render width background light', () => {
        const {container} = renderTheme(
            <SectionBackground>
                <h1>Children</h1>
            </SectionBackground>
        );
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});