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

  async getContact({ id = this.constructor.isRequired('id') }) {
    const { apiUrl, authorization } = this

    return await request({
      uri: `${apiUrl}/contacts/${id}`,
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

  async addContactToStage({
    contactId = this.constructor.isRequired('contactId'),
    stageId = this.constructor.isRequired('stageId')
  }) {
    const { apiUrl, authorization } = this

    return await request.post({
      uri: `${apiUrl}/stages/${stageId}/contact/${contactId}/add`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      json: true
    })
  }

  async doNotContactViaChannel({
    id = this.constructor.isRequired('id'),
    type = this.contructor.isRequired('type')
  }) {
    const { apiUrl, authorization } = this

    return await request.post({
      uri: `${apiUrl}/contacts/${id}/dnc/add/${type}`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      body: {
        channel: type
      },
      json: true
    })
  }

  async createUser({
    username = this.constructor.isRequired('username'),
    plainPassword = this.constructor.isRequired('plainPassword'),
    role = this.constructor.isRequired('role'),
    contactInfo = this.constructor.isRequired('contactInfo')
  }) {
    const { apiUrl, authorization } = this

    return await request.post({
      uri: `${apiUrl}/users/new`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      body: {
        username,
        role,
        plainPassword,
        ...contactInfo
      },
      json: true
    })
  }

  async findUser({
    param = this.constructor.isRequired('param'),
    value = this.constructor.isRequired('value')
  }) {
    const { apiUrl, authorization } = this

    return await request({
      uri: `${apiUrl}/users?search=${param}:${value}`,
      headers: {
        Authorization: `Basic ${authorization}`
      },
      json: true
    })
  }
}

module.exports = Nautic
