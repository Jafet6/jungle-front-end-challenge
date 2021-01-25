import React, { useState, useEffect } from 'react';
import crypto from 'crypto';
import playIcon from '../../images/homePage/playIcon.svg';
import greetingImage from '../../images/homePage/greetingImage.svg';
import './headline.css'
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely
} from '@optimizely/react-sdk';


const optimizely = createInstance({
  sdkKey: '7rBqHFuNcf15mthRX89Uf'
});

class SeeHapuSpan extends React.Component {
  onClick = () => {
    const { optimizely } = this.props
    optimizely.track('SeeHapu')
  }

  render() {
    return (
      <span className="playIcon-description" onClick={this.onClick}>
        See hapu in action (27 seconds)
      </span>
    )
  }
}

const SeeHapuTracker = withOptimizely(SeeHapuSpan)

function HeadLine() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      crypto.randomBytes(16, (err, hash) => {
        const userId = hash.toString('hex')
        console.log('u9asdhyfuihasdfjohsdaihjfuiohjasdf', userId)
        localStorage.setItem('userId', userId)
        setUserId(userId);
      })
    } else {
      setUserId(localStorage.getItem('userId'));
    }
  }, []);

  if (userId === '') return <div>Loading...</div>

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: userId
      }}
    >
      <div>
        <div className="head-line-content">
          <div className="head-line-left">
            <div>
            <OptimizelyFeature feature="JungleDevs">
              {(enabled, variables) => (
                <div>
                  <h1 className="h1-home-page">{variables.hero_test.title}</h1>
                  <p className="p-home-page">{variables.hero_test.description}</p>
                </div>
              )}
            </OptimizelyFeature>
            </div>
            <div>
              <div className="play-description-container">
                <div className="playIcon-container">
                  <img className="playIcon" src={playIcon} alt="play icon" />
                </div>
                <SeeHapuTracker />
              </div>
            </div>
          </div>
          <div className="greeting-image">
            <img src={greetingImage} alt="geeting" />
          </div>
        </div>
      </div>
    </OptimizelyProvider>
  );
};

export default HeadLine;