import React, { Component } from "react";
import { DM } from './DungeonMaster';

/*
Creating a box where the inventory lives.
Need a variable keysCollected which is the number of keys collected
STRETCH: Need a variable "InventoryItems" which will pull the items from 'InventoryItems.js'

CSS:
Off white box.
Long thin box that appears at the bottom of the screen.
Box shadow.

*/

class Inventory extends Component {
    render() {
        return (
          <DM.Consumer>
            {context => (
              // this is where any work happens that requires state. DungeonMaster's "this.state" can be reffered to as "context" here
                <div className="inventory">
                    <h2 className="name-Inventory">Inventory:</h2>
                    <div className="flex-container">
                      <div>paper clip</div>
                      <div>paper clip asdf</div>
                      <div>paper clip ed</div>
                      <div>paper</div>
                    </div>
                    <p className="name">Keys Collected: {context.keysCollected} / 84</p>
                </div>
            )}
          </DM.Consumer>
        );
    }
}

// currently unused --------
class InventoryItem extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          // this is where any work happens that requires state. 
          return (
            <div className="key counter">
              <p>Number of keys: {context.numKeys} </p>
            </div>
          )}}
      </DM.Consumer>
    );
  }
}

export default Inventory;