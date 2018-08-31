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
}
