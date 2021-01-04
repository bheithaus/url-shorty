import Axios from 'axios';
import { GetServerSideProps } from 'next';
import urlBase from '../lib/urlBase'

export default function shortURL() {
  return null
}

/**
 * redirect page
 * @param {} context 
 */
export const getServerSideProps = async (context) => {
  const { short_url } = context.params
  const URL_BASE = urlBase()

  console.log('looking for original from short url :', short_url)

  const response = await Axios.get(`${URL_BASE}/api/get-url`, {
    params: {
      surl: short_url
    }
  })

  return {
    redirect: {
      destination: response.data.url || '/?invalid_short_link=true',
      permanent: true
    },
  }
}