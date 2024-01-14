import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalresults, setTotalResults] = useState(0)
  // document.title = `${capitalizeFirstLetter(
  //     props.category
  //   )} - Thoughtful Media Co.`
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const update = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b43d01bedf524384aa8b05ec2b472551&page=${page}&pageSize=${props.pagesize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(50)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    update()
    // eslint-disable-next-line
  }, [])

  // handlePreviousClick = async (props) => {
  //   setState({ page: page - 1 })
  //   update()
  // }
  // handleNextClick = async () => {
  //   if (
  //     page + 1 >
  //     Math.ceil(state.totalresults / props.pagesize)
  //   ) {
  //   } else {
  //     setState({ page: page + 1 })
  //     update()
  //   }
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=b43d01bedf524384aa8b05ec2b472551&page=${
      page + 1
    }&pageSize=${props.pagesize}`
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  return (
    <div className='container'>
      <h2 className='text-center' style={{ marginTop: '70px' }}>
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {/* {loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={loading && <Spinner />}
      >
        <div className='container '>
          <div className='row'>
            {articles.map((element) => {
              return (
                <div className='col-md-4 ' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    title_len={
                      element.title == null ? '' : element.title.length
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ''
                    }
                    desc_len={
                      element.description == null
                        ? ''
                        : element.description.length
                    }
                    imgurl={element.urlToImage ? element.urlToImage : ''}
                    newsUrl={element.url}
                    author={element.author ? element.author : 'unknown'}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handlePreviousClick}
            disabled={page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={handleNextClick}
            disabled={
              page + 1 >
              Math.ceil(state.totalresults / props.pagesize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pagesize: 15,
  category: 'general',
  totalresults: 0,
}
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
}

export default News
