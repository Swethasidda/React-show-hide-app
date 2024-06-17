// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: false, lastCrad: false}

  onFirstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({firstCard: !firstCard}))
  }

  onLastName = () => {
    const {lastCrad} = this.state
    this.setState(() => ({lastCrad: !lastCrad}))
  }

  render() {
    const {firstCard, lastCrad} = this.state
    return (
      <div className="big-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="card-container">
            <button
              type="button"
              className="button button1"
              onClick={this.onFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name-card">Joe</p> : null}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="button button2"
              onClick={this.onLastName}
            >
              Show/Hide Lastname
            </button>
            {lastCrad ? <p className="name-card">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
