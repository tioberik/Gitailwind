import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './components/Navigation.jsx'
import RepoStats from './components/RepoStats.jsx'
import RepoNav from './components/RepoNav.jsx'
import FileExplorer from './components/FileExplorer.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <RepoStats />
    <RepoNav />
    <FileExplorer />
    <Footer />
  </React.StrictMode>,
)
