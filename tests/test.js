import Nautic from '../index'
import NauticConsumer from './nautic-consumer'

jest.mock('../index')

beforeEach(() => {
  Nautic.mockClear()
})

it('Check if the consumer called the createContact method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.createNewContact()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockCreateContact = mockNauticInstance.createContact

  expect(mockCreateContact).toHaveBeenCalledWith({
    body: { name: 'Ron Swanson' }
  })
  expect(mockCreateContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the findContact method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.findRonSwansonContact()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockFindContact = mockNauticInstance.findContact

  expect(mockFindContact).toHaveBeenCalledWith({
    param: 'name',
    value: 'Ron Swanson'
  })
  expect(mockFindContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the getContact method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.getRonSwansonContact()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockGetContact = mockNauticInstance.getContact

  expect(mockGetContact).toHaveBeenCalledWith({
    id: '1'
  })
  expect(mockGetContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the updateContact method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.updateRonSwansonContact()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockUpdateContact = mockNauticInstance.updateContact

  expect(mockUpdateContact).toHaveBeenCalledWith({
    id: '1',
    company: 'Pawnee City Council'
  })
  expect(mockUpdateContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the addContactToStage method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.addRonSwansonContactStage()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockUpdateContact = mockNauticInstance.addContactToStage

  expect(mockUpdateContact).toHaveBeenCalledWith({
    contactId: '1',
    stageId: '1'
  })
  expect(mockUpdateContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the doNotContactViaChannel method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.doNotContactRonSwanson()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockUpdateContact = mockNauticInstance.doNotContactViaChannel

  expect(mockUpdateContact).toHaveBeenCalledWith({
    id: '1',
    type: 'email'
  })
  expect(mockUpdateContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the createUser method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.createAndyDwyer()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockUpdateContact = mockNauticInstance.createUser

  expect(mockUpdateContact).toHaveBeenCalledWith({
    username: 'Burt Macklin',
    role: '1',
    plainPassword: 'network-connectivity-problems',
    contactInfo: {
      firstname: 'Andy',
      lastname: 'Dwyer',
      email: 'andyd@pawnee.in.gov'
    }
  })
  expect(mockUpdateContact).toHaveBeenCalledTimes(1)
})

it('Check if the consumer called the findUser method on the class instance', () => {
  expect(Nautic).not.toHaveBeenCalled()

  const nauticConsumer = new NauticConsumer()
  expect(Nautic).toHaveBeenCalledTimes(1)

  nauticConsumer.findAndyDwyer()

  const [mockNauticInstance] = Nautic.mock.instances
  const mockUpdateContact = mockNauticInstance.findUser

  expect(mockUpdateContact).toHaveBeenCalledWith({
    param: 'email',
    value: 'andyd@pawnee.in.gov'
  })
  expect(mockUpdateContact).toHaveBeenCalledTimes(1)
})
