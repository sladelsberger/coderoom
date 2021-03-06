import React, { Component } from 'react';

const DM = React.createContext();
var myWorker = new Worker("./worker.js");


class DungeonMaster extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      keysCollected: 0,
      text: {
          introText: "You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...",
          deskText: "You head to the desk and search amongst the scattered sheets of paper: ",
          nightstandText: "Wondering what might be inside you open the nightstand drawer: ",
          bedText: "Hoping no monsters attack, you cautiously peek under the bed: ",
          completionText: "Congratulations on completion of the challenge. You received 28 keys!",
          bossChallengeText: "You have collected all the keys to the keyboard. Time for the Boss battle!",
          bossDefeatText: "CONGRATULATIONS!!! You have succesfully defeated the Boss Challenge and ESCAPED!!!"
      },

      activeNarrative: ['You wake up to find yourself in a dimly lit room. Wondering where you are you start to explore your small surroundings...'],


      promptText: '',
      deskBtn: {disabled: false, active: false, text: 'Check Desk'},
      nightstandBtn: {disabled: false, active: false, text: 'Open Nightstand Drawer!'},
      bedBtn: {disabled: false, active: false, text: 'Look Under Bed'},
      bossBtn: {disabled: false, active: false, text: 'Challenge Boss'},
      goToDesk: () => {
        console.log("are we in?");
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.deskText);
        // set deskBtn disabled so it's greyed out
        this.setState({deskBtn: {disabled: true }});
      },
      goToNightstand: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.nightstandText);
        // set nightstandBtn disabled so it's greyed out
        this.setState({nightstandBtn: {disabled: true}});
      },
      goToBed: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.bedText);
        // set bedBtn disabled so it's greyed out
        this.setState({bedBtn: {disabled: true}});
      },
      challengeBoss: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.bossChallengeText);
        // set bedBtn disabled so it's greyed out
        this.setState({bossBtn: {disabled: true}});
      },
      challengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.text.completionText);
        // we also need to add 28 keys to the player's total keys
        this.setState({keysCollected: this.state.keysCollected + 28});
        // finally upon completion, change the interactive container back to the page with the 3 buttons ---the clicked button should be unclickable from other function.
      },
      bossChallengeCompleted: function() {
        // here we add the relevant narrative text to the active narrative array
        this.state.activeNarrative.push(this.state.bossDefeatText);
        // we also need to redirect the player to the winner screen
      },
      toggleHidden: function() {
        this.setState({isHidden: !this.state.isHidden});
      },
      challengeActive: true,
      challengePrompt: 'Your first challenge:',
      startingCode: 'function test (params) {}',
      submitTest: function(code) {
        console.log(`submitTest: submitting code to web worker, sending datatype: ${typeof code}.\nCode to submit: ${code}`);
        // myWorker.postMessage({ code, challenge: 1 })
      }
    }
    this.state.goToDesk = this.state.goToDesk.bind(this);
    this.state.goToBed = this.state.goToBed.bind(this);
    this.state.goToNightstand = this.state.goToNightstand.bind(this);
    this.state.challengeBoss = this.state.challengeBoss.bind(this);
    this.state.challengeCompleted = this.state.challengeCompleted.bind(this);
    this.state.bossChallengeCompleted = this.state.bossChallengeCompleted.bind(this);
    this.state.submitTest = this.state.submitTest.bind(this);
    this.state.toggleHidden = this.state.toggleHidden.bind(this);
    myWorker.onmessage = function (e) {
      console.log( e.data );
      console.log('Message received from worker');
    };
    // bind in-state functions here
}

render() {
    return (
        <DM.Provider value={this.state}>
            {this.props.children}
        </DM.Provider>
    );
  }
}

export { DungeonMaster,  DM };
