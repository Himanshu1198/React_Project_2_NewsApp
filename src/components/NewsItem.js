import React from 'react'

const NewsItem = (props) => {
  let {
    title,
    description,
    imgurl,
    newsUrl,
    title_len,
    desc_len,
    author,
    date,
    source,
  } = props
  return (
    <div className='my-3'>
      <div className='card'>
        <span
          className='position-absolute top-0 translate-middle badge rounded-pill bg-danger '
          style={{ zIndex: '1', left: '50%' }}
        >
          {source}
          <span className='visually-hidden'>unread messages</span>
        </span>
        <img
          src={
            imgurl ? imgurl : 'https://cdn.ndtv.com/common/images/ogndtv.png'
          }
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>
            {title}
            {title_len > 45 ? '....' : ''}
          </h5>
          <p className='card-text'>
            {description}
            {desc_len > 88 ? '....' : ''}
          </p>
          <p rel='noreffer' href={newsUrl} className='card-text'>
            By {author} on {new Date(date).toUTCString()}
          </p>
          <a
            href={newsUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-sm btn-primary'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
