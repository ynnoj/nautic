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

  updateRonSwansonContact() {
    this.nautic.updateContact({ id: '1', company: 'Pawnee City Council' })
  }
}
