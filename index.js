const request = require('request-promise')

class Nautic {
  constructor({ apiUrl, username, password }) {
    this.apiUrl = apiUrl
    this.authorization = `${Buffer.from(`${username}:${password}`).toString(
      'base64'
    )}`
  }

  static isRequired(param) {
    throw new Error(`${param} is required`)
  }

  async createContact({ body = this.constructor.isRequired('body') }) {
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

  async findContact({
    param = this.constructor.isRequired('param'),
    value = this.constructor.isRequired('value')
  }) {
    const { apiUrl, authorization } = this

    return await request({
      uri: `${apiUrl}/contacts?search=${param}:${value}`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      json: true
    })
  }

  async updateContact({ id = this.constructor.isRequired('id'), ...rest }) {
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
