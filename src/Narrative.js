import React, { Component } from 'react';
import './Narrative.css';

// STATE NEEDED:
// an array of strings containing all active paragraphs (storing max 10 paragraphs at a time)
// __STATEVAR is placeholder for state-based variables

// CSS:
// max height?
// must scroll if P's overflow
// for Paragraphs: not much, a font-family, if different from default, & a font size?
// STRETCH: jQuery to fade in new P's

class Paragraph extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          return(
            <div>
              <p>{context.text}</p>
            </div>
          )
        }}
      </DM.Consumer>  
    );
  } 
}

class Narrative extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          const paragraphs = __STATEVAR_PARAGRAPH_ARRAY.map((e, i) => <Paragraph key={`np${i}`} text={e} />);
          return (
            <div className="narrative-wrapper">
              {paragraphs}
            </div>
          )
        }}
      </DM.Consumer>
    );
  } 
}

export default Narrative;
