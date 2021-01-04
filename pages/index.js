import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'

import InvalidShortLink from '../components/InvalidShortLink'
import urlBase from '../lib/urlBase'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [url, setUrl] = useState('')
  const [surl, setSurl] = useState('')
  const URL_BASE = urlBase()

  const shortenUrl = (e) => {
    // send to the backend for url shortening
    axios.post('/api/shorten-url', {
      url
    })
    .then(function (response) {
      console.log(response)
      setSurl(response.data.surl)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shorty</title>
      </Head>

      <InvalidShortLink/>

      <main className={styles.main}>
        <h2 className={styles.title}>
          URL Shorty
        </h2>

        <p className={styles.description}>
          Enter a URL to shorten here:
        </p>
        
        <input
          type="text"
          className={styles.input}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="submit"
          className={styles.button}
          value="Create Short Link"
          onClick={shortenUrl}
        />

        {surl && (
          <div>
            <p>Generated Short URL</p>
            <input
              type="text"
              readOnly
              className={styles.input}
              value={`${URL_BASE}/${surl}`}
            />        
          </div>
        )}
      </main>
    </div>
  )
}
