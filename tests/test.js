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
