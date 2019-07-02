import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from "semantic-ui-react";
import AppFeaturesTrivia from './TriviaAppFeatures';
import ComingSoonAppFeatures from './ComingSoonAppFeatures';
import NewsAppFeatures from './NewsAppFeatures';
import imgA from '../../src/images/TriviaIconC.png';
import imgB from '../../src/images/TopNewsIconB.png';
import imgC from '../../src/images/ComingSoonIcon.png';

const ListApps = () => (
    <Grid padded stackable columns={3}>
        <Grid.Column color='yellow'>
            <Image
                src={imgB}
                as={ Link }
                to="/apps/news"
                size='medium'
            />
            <NewsAppFeatures />
        </Grid.Column>
        <Grid.Column>
            <Image
                src={imgA}
                as={ Link }
                to="/apps/trivia"
                size='medium'
                rounded
                verticalAlign='middle'
                centered
            />
            <AppFeaturesTrivia />
        </Grid.Column>
        <Grid.Column color='green'>
            <Image
                src={imgC}
                as='a'
                size='medium'
                href='http://google.com'
                target='_blank'
                spaced='left'
            />
            <ComingSoonAppFeatures />
        </Grid.Column>
    </Grid>
);

export default ListApps;