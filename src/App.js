import './App.css'

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {
  const pagesize = 6

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='general'
                key='general'
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='business'
                key='business'
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='entertainment'
                key='entertainment'
              />
            }
          />
          <Route
            exact
            path='/general'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='general'
                key='general'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='health'
                key='health'
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='science'
                key='science'
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='sports'
                key='sports'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='health'
                key='health'
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={setProgress}
                pagesize={pagesize}
                category='technology'
                key='technology'
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
