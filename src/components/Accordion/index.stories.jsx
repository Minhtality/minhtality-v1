import Accordion from './index';
export default {
    title: 'Accordion',
    component: Accordion, 
}

const mocks =  {
    imgSrc: "https://via.placeholder.com/150x150?text=NG",
    fallBackImageSrc: "https://via.placeholder.com/150/Text=NG",
    heading: "Accordion Heading",
    href: "https://www.northropgrumman.com/",
    description: "Description: Oct 2022 - Present",
    content: `
        <h4>Accordion Content</h4>
        <p>Can be any component as children</p>
        <p><strong>Or </strong>Html element as children:
            <ul>
                <li>Or can be used as html markup</li>
                <li>like this list</li>
            </ul>
        </p>
    `,
}

const template = (arg) => {
    return (
        <Accordion {...arg} />
    )
}

export const Default = template.bind({});

Default.args = {
    ...mocks
}
