import React from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import { /*resume,*/education, interests, about, services, website, webapps, mobileapps } from '../../misc_files/resumehtml';

const AppWrapper = styled.section`
    background-color: #f8f8ff;
`;

//     { menuItem: 'Resume/CV', render: () => <Tab.Pane>{resume}</Tab.Pane> },

const panes = [
    { menuItem: 'Services', render: () => <Tab.Pane>{services}</Tab.Pane> },
    { menuItem: 'Website Design', render: () => <Tab.Pane>{website}</Tab.Pane> },
    { menuItem: 'Web Apps', render: () => <Tab.Pane>{webapps}</Tab.Pane> },
    { menuItem: 'Mobile Apps', render: () => <Tab.Pane>{mobileapps}</Tab.Pane> },
    { menuItem: 'Education', render: () => <Tab.Pane>{education}</Tab.Pane> },
    { menuItem: 'Interests', render: () => <Tab.Pane>{interests}</Tab.Pane> },
    { menuItem: 'About Me', render: () => <Tab.Pane>{about}</Tab.Pane> },
];

const Info = () => (
    <AppWrapper>

    </AppWrapper>
);

export default Info;