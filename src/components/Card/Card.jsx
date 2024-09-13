import './Card.css'
import CardImage from '../../assets/illustration-article.svg'
import AuthorPhoto from '../../assets/image-avatar.webp'
import PropTypes from 'prop-types';

function Card({ title, content, status, date }) {
  return (
    <div className='box'>
        <article className='card-container'>
            <img className='card-image' src={CardImage} alt="card image" />
            <p className='status'>{status}</p>
            <p className='publish-date'>Published {date}</p>
            <h1 className='card-title'>{title}</h1>
            <p className='card-content'>{content}</p>
            <div className="author">
                <img className='author-photo' src={AuthorPhoto} alt="a image of author" />
                <p className='author-name'>Greg Hooper</p>
            </div>
        </article>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Card