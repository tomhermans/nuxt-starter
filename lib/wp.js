import axios from 'axios'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json/wp/v2`
  }

  posts () {
    return axios.get(`${this.apiBase}/posts`, {
      params: {
        page: 1,
        per_page: 5
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const wp = new WpApi('http://tomhermans.com/')

export default wp