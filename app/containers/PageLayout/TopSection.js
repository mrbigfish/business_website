import React from 'react';
import { Header, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import TopSectionContainer from './StyledComponents/TopSectionContainer';
import TitleContainer from './StyledComponents/TitleContainer';
import TitlePicture from './StyledComponents/TitlePicture';
import TitleSection from './StyledComponents/TitleSection';
import pic from '../../images/size150.png';
import LeftNav from './LeftNav';

const ContactStyle = styled.div`
  align-self: top;
  margin: 0;
`;

const CenterNav = styled.div`
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`

const TopSection = () => (
    <TopSectionContainer>
        <TitleContainer>
            <TitlePicture>
                <Image fluid src={pic} verticalAlign='middle' circular/>
            </TitlePicture>
            <TitleSection>
                <Header as='h1' inverted color='black'>
                  Brian Turner, MBA
                </Header>
                <ContactStyle>
                    <Header as='h5' inverted color='black'>
                        <Icon disabled color='blue' size='tiny' name='mail' />bkturner10199@gmail.com
                    </Header>
                </ContactStyle>
                <ContactStyle>
                    <Header as='h5' inverted color='black'>
                        <Icon disabled color='blue' size='tiny' name='phone square' />+01-810-962-6788
                    </Header>
                </ContactStyle>
            </TitleSection>
        </TitleContainer>
        <CenterNav>
        <LeftNav />
        </CenterNav>
    </TopSectionContainer>
);

export default TopSection;
