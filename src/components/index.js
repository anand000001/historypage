import './index.css'

const HistoryProfile = props => {
  const {userDetails, deleteUser} = props
  const {title, timeAccessed, logoUrl, domainUrl, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-list">
      <div className="app-list">
        <p className="time">{timeAccessed}</p>
        <div className="content-container">
          <div className="logo-img-container">
            <img src={logoUrl} alt="domain logo" className="logo-img" />
          </div>
          <p className="title">{title}</p>
          <p className="description">{domainUrl}</p>
        </div>
      </div>
      <button
        className="delete-icon-container"
        onClick={onDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="Delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryProfile
