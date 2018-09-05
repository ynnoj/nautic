import Nautic from '../index'

export default class NauticConsumer {
  constructor() {
    this.nautic = new Nautic()
  }

  createNewContact() {
    this.nautic.createContact({
      body: {
        name: 'Ron Swanson'
      }
    })
  }

  findRonSwansonContact() {
    this.nautic.findContact({ param: 'name', value: 'Ron Swanson' })
  }

  getRonSwansonContact() {
    this.nautic.getContact({ id: '1' })
  }

  updateRonSwansonContact() {
    this.nautic.updateContact({ id: '1', company: 'Pawnee City Council' })
  }

  addRonSwansonContactStage() {
    this.nautic.addContactToStage({ contactId: '1', stageId: '1' })
  }

  doNotContactRonSwanson() {
    this.nautic.doNotContactViaChannel({ id: '1', type: 'email' })
  }

  createAndyDwyer() {
    this.nautic.createUser({
      username: 'Burt Macklin',
      role: '1',
      plainPassword: 'network-connectivity-problems',
      contactInfo: {
        firstname: 'Andy',
        lastname: 'Dwyer',
        email: 'andyd@pawnee.in.gov'
      }
    })
  }

  findAndyDwyer() {
    this.nautic.findUser({
      param: 'email',
      value: 'andyd@pawnee.in.gov'
    })
  }
}
