import React from 'react';
import { Divider, Header, Icon, Segment, Grid } from 'semantic-ui-react';

const ListAppInfo = () => (
    <Segment>
        <Divider horizontal>
            <Header as='h4'>
                <Icon name='tag' />
        General Apps Information
            </Header>
        </Divider>
        <Grid stackable columns={3}>
            <Grid.Column>
                <Segment>
                    <Icon name='react' size='large' />
                    <Icon name='js' size='large' />
                    <Icon name='chrome' size='large' />
                    <Icon name='linux' size='large' />
                    <Icon name='github' size='large' />
                    <Icon name='npm' size='large' /><br />
             CLIENT-SIDE DEVELOPMENT<br />
             Full React/Redux/Saga Component Apps<br />
             jQuery-free and CSS-free (thanks to Styled-Components)<br />
             Babel, Webpack, Jest, HMR Support
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <Icon name='node js' size='large' />
                    <Icon name='aws' size='large' /><br />BACKEND DEVELOPMENT<br />
           I use JS Node with NPM Package Manager for Development. I plan to utilize AWS for deployment. I will update further as I get deeper into releasing the website.
                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <Icon name='medium' size='large' />
                    <Icon name='stack overflow' size='large' /><br />COMMUNITY RESOURCES<br />
           I would really like to thank the development community!<br />
           Medium, Stack Overflow, GitHub, and others, provide the platforms. The people in the community though 
           are the big brothers in the learning of web development.<br />
           I would not be where I am at without it. Modern Open Source Web Information sharing would not be where its at today. So, thank you!
                </Segment>
            </Grid.Column>
        </Grid>
    </Segment>
);

export default ListAppInfo;