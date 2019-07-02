
import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const info = "Below are a list of all created Apps for my website.  Feel free to 'click' and enjoy!!  As I create them, I will Add/Delete to show new Apps.  If you have any requested Apps, feel free to contact me in the 'Contact' Tab above.  Also, the general specifics for my Apps are listed just below.";

const AppsHeader = () => (
    <Segment attached>
        <Header as='h3' textAlign='center' color='red' block>
          MY APPLICATIONS
        </Header>
        <Segment attached>
            {info}
        </Segment>
    </Segment>
);

export default AppsHeader;