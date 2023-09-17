import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      className="image-not-found"
      alt="not found"
    />
    <h1 className="heading-not-found">Page Not Found</h1>
    <p className="desc-not-found">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
