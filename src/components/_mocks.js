export const iconsMock = [
  'ReactIcon',
  'CssIcon',
  'HtmlIcon',
  'StyledComPonentIcon',
  'MaterialUiIcon',
  'RubyIcon',
  'NextJsIcon'
]

export const accordionsMock = [
  {
    imageSrc: '/images/ng.png',
    fallBackImageSrc: '/images/ng.png',
    title: 'Northrop Grumman',
    href: 'https://www.northropgrumman.com/',
    description: 'Oct 2022 - Present',
    content: `
            <h4>Design System for USAF and USN</h4>
            <br />
            <p>Improve consistency and streamline the front-end development process by utilizing Storybook to create a design system that encompasses snapshots and accessibility guidelines, catering to both designers and front-end developers.</p>
            <br />
            <p>Technologies and skills:
                <ul>
                    <li>Material-UI, ReactJS, Web Designs, User Interface Design, User Experience (UX), Accessibility, devops</li>
                </ul>
            </p>
        `
  },
  {
    imageSrc: '/images/ll.png',
    fallBackImageSrc: '/images/ll.png',
    title: 'Lemonlight Media',
    href: 'https://www.lemonlight.com/',
    description: 'April 2022 - Oct 2022',
    content: `
            <h4>Internal Portal Tool for Sales Team to Manage Clients' Projects</h4>
            <br />
            <p>I developed an internal platform that facilitates efficient project and sales management for the sales team. This platform enables them to oversee their clients' projects, track the progress of video production from the draft stage to the final product, and manage project timelines effectively. The tool is built with <a target="_blank" href="https://reactjs.org/">ReactJS</a>, <a href="https://rubyonrails.org/" target="_blank">Ruby on Rails</a>, <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>, and <a href="https://mui.com/" target="_blank">Material-ui</a>.</p>
            <br />
            <p>Some of the features I've worked on include:
                <ul>
                    <li>Built and implemented multi-factor authentication with Twilio and Google Authenticator for the new user onboarding process.</li>
                    <li>Created an interactive annotation tool for internal editors and clients to collaborate on video and script revisions.</li>
                    <li><a target="_blank" href="https://storybook.js.org/">Storybook</a> implementation with ReactJS to showcase standalone components with their variations and style guides.</li>
                    <li>An internal email signature generator, enables the HR team to build dynamic signatures during the onboarding process.</li>
                </ul>
            </p>
        `
  },
  {
    imageSrc: '/images/t1.png',
    href: 'https://www.teamone-usa.com/',
    title: 'Team One',
    description: 'Dec 2019 - Apr 2022',
    content: `

            <h4>Lexus.com - Model Page Redesign | Front-End Developer</h4>
            <p><i>Dec 2019 - Mar 2020</i></p>

            <ul>
                <li>An overhaul of the <a target="_blank" href="https://web.archive.org/web/20191108081431/https://www.lexus.com/models/LC">legacy model page</a>, originally built in vanilla Javascript and handlebar templates, which consisted of a lot technical debt and duplicated code.</li>
                <li>The goal was to create a more modern and engaging experience for the user, while maintaining the brand's identity, code scalability, improve performance, and accessibility.</li>
                <li>The new page was built using <a target="_blank" href="https://www.oracle.com/java/technologies/java8.html">Java</a> for backend, <a target="_blank" href="https://reactjs.org/">ReactJS</a> for frontend, <a target="_blank" href="https://react-spring.dev/">React-Spring</a> for animation. All CSS 
                were written from scratch and documented in <a target="_blank" href="https://www.oracle.com/java/technologies/java8.html">Storybook</a>, allows creatives and stakeholders to view each standalone component style guide.</li>
            </ul>
            
            <h4>Lexus.com - Site Migration to ReactJS | Front-End Developer</h4>
            <p><i>Mar 2020 - Jun 2021</i></p>

            <div>
                <p>After the Model Page re-design pitch, this project kicks off to fully migrate the entire <a target="_blank" href="https://www.lexus.com/">lexus.com</a>  from from a legacy codebase of over 700k line of code over to React components.</p>
                <p>I was the sole frontend developer on 1 of the 3 teams that worked on this project. Responsible for some of the notable features such as:
                <ul>
                    <li>Migrate the model <a target="_blank" href="https://www.lexus.com/models/LC/visualizer">visualizer</a> to React and integrate with Adobe Experience Manager (AEM) for content management.</li>
                    <li>Migrate the sub-nav component to React, add support for scroll detection, add variations between use case like <a target="_blank" href="https://www.lexus.com/lcertified">LCertified Pages</a> vs <a target="_blank" href="https://www.lexus.com/models/IS500">Model Pages</a></li>
                    <li>Analytics integration with custom firetags, Flashtalking, and Ensighten.</li>
                    <li>Offers data integration with AEM and mocks for Storybook.</li>
                    <li>Enables site-wide animation.</li>
                </p>
                </ul>

                <p>
                    One of the biggest challenge was the ability to click to drag-and-drop components in AEM that allows content editors to easily update existing pages or build new ones without having to know any code.</p>
                </p>
            </div>

            <h4>Lexus Mexico | Full-Stack Developer</h4>
            <p><i>Oct 2021 - Jan 2022</i></p>

            <ul>
                <li>Quickly built the <a href="https://www.lexus.mx/" target="_blank">lexus.mx</a> site, leveraging existing components in the CMS library.</li>
                <li>Built a data provider component to toggle unique features between MX and USA.</li>
            </ul>

            <h4>Lexus Drivers | Front-End Developer</h4>
            <p><i>Jan 2022 - Apr 2022</i></p>
            <ul>
                <li>Kickoff <a target="_blank" href="https://drivers.lexus.com/lexusdrivers">Lexus Drivers</a> site migration to utilize the platform's reusable components.</li>
                <li>Built on top of most current global navigation component to support the new variation of the Drivers site that requires authentication.</li>
            </ul>
        `
  }
]

export const projectsMock = [
  {
    imageSrc: '/images/homepage.png',
    fallBackImageSrc: '/images/homepage.png',
    title: 'Good Soup.',
    href: 'https://frontend-coffee.vercel.app/',
    description:
      'A simple, clean, and responsive website for a fictional home coffee shop for friends and family. Accepts orders and payments. Fully responsive and mobile friendly. Integrated with Strapi for content management.'
  }
]
