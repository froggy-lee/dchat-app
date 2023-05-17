import { faker } from '@faker-js/faker'

export const USERS = []

export function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.name.fullName(),
    avatar: faker.image.avatar()
  }
}

Array.from({ length: 1000 }).forEach(() => {
  USERS.push(createRandomUser())
})
