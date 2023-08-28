import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)
    return (
      <div className="main-container">
        <div className="blue-container">
          <div className="card">
            <h1 className="heading">Countries And Capitals</h1>
            <div className="states-container">
              <select
                className="style-input"
                value={capitalId}
                onChange={this.onChangeCapital}
              >
                {countryAndCapitalsList.map(eachList => (
                  <option key={eachList.id} value={eachList.id}>
                    {eachList.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="paragraph"> is capital of which country?</p>
            </div>
            <div>
              <h1 className="country-heading">{country}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
