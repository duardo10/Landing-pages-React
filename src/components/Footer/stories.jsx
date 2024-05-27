import { Footer } from '.';


export default {
    title: 'Footer',
    component: Footer,
    args: {
        footerHtml: `<p><a>Feito por Luis Eduardo</a></p>`,
    },
    
};

export const Template = (args) => {
    return (
        <div>
            <Footer {...args} />
        </div>
    );
}
