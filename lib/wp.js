import axios from 'axios'

class WpApi {
  siteData() {
    return axios.get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmt_offset, timezone_string } = json.data
        return { site_data: { name, description, url, home, gmt_offset, timezone_string } }
      })
      .catch(e => ({ error: e }))
  }

  constructor(siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  posts() {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: 10
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

const wp = new WpApi('http://tomhermans.com/') // your site URL

export default wp