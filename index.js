const request = require('request-promise')

class Nautic {
  constructor({ apiUrl, username, password }) {
    this.apiUrl = apiUrl
    this.authorization = `${Buffer.from(`${username}:${password}`).toString(
      'base64'
    )}`
  }

  async createContact({ body }) {
    const { apiUrl, authorization } = this

    return await request.post({
      uri: `${apiUrl}/contacts/new`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      body,
      json: true
    })
  }

  async findContact({ storeId }) {
    const { apiUrl, authorization } = this

    return await request({
      uri: `${apiUrl}/contacts?search=store_id:${storeId}`,
      headers: {
        Authorization: `Basic ${authorization}`
      }
    })
  }

  async updateContact({ id, ...rest }) {
    const { apiUrl, authorization } = this

    return await request.patch({
      uri: `${apiUrl}/contacts/${id}/edit`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      body: {
        ...rest
      },
      json: true
    })
  }
}

module.exports = Nautic
