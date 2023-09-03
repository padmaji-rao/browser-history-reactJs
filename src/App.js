import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

console.log(initialHistoryList)
// Replace your code here
const HistoryItem = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, onClickDelete} = props
  console.log(id, title, domainUrl)
  const onDelete = () => {
    onClickDelete(id)
  }
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="domain-container">
        <div className="domain-details-contained-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-details-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          className="delete-button"
          onClick={onDelete}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

class AppContainer extends Component {
  state = {
    historyList: initialHistoryList,
    input: '',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickDelete = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updatedList})
  }

  render() {
    const {historyList, input} = this.state
    const searchedList = historyList.filter(each =>
      each.title.toLowerCase().includes(input.toLowerCase()),
    )
    let res = null
    if (searchedList.length === 0) {
      res = <p>There is no history to show</p>
    } else {
      res = searchedList.map(each => (
        <HistoryItem
          onClickDelete={this.onClickDelete}
          domainUrl={each.domainUrl}
          logoUrl={each.logoUrl}
          key={each.id}
          title={each.title}
          timeAccessed={each.timeAccessed}
          id={each.id}
        />
      ))
    }
    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                onChange={this.onChangeInput}
                type="search"
                placeholder="Search History"
                className="input"
                value={input}
              />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <ul className="history-container">{res}</ul>
        </div>
      </div>
    )
  }
}

const App = () => <AppContainer />

export default App
