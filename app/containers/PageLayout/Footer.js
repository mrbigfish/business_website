import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import img from '../../images/In-Blue-14-2x.png';

const FooterContainer = styled.section`
display: inline-block;
display: block;
margin-left: auto;
margin-right: auto;
width: 93%;
text-align: right;
padding: 1% 5%;
min-height: 80px;
border: 1px dotted black;
`;

const Footer = () => (
    <FooterContainer>
        <Image
            src={img}
            as='a'
            size='tiny'
            verticalAlign='middle'
            href='https://www.linkedin.com/in/brianturner-mba'
            target='_blank'
        /><p>Connect<br />@ Linkdin</p>
    </FooterContainer>
);

export default Footer;