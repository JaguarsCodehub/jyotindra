import React from 'react';
import {FeatureContainer,FeatureButton,FeatureH1,FeatureP} from './FeatureElements';

const Feature = () => {
    return(
        <FeatureContainer>
            <FeatureH1>Let's convert your idea into a reality</FeatureH1>
            <FeatureP>Click below to check my performance on my playground</FeatureP>
            <FeatureButton to="/playground">Check Performance</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;
