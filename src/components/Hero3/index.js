import React from 'react';
import {FeatureContainer,FeatureButton,FeatureH1,FeatureP} from './FeatureElements';
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'

const Feature = () => {
    return(
        <FeatureContainer>
            <Zoom bottom cascade>
                <FeatureH1>Let's convert your idea into a reality</FeatureH1>
                <FeatureP>Click below to check my performance on my playground</FeatureP>
            </Zoom>
                <FeatureButton to="/playground">Check Performance</FeatureButton>
             
        </FeatureContainer>
    )
}

export default Feature;
