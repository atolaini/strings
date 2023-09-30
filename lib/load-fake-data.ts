import { prisma } from '@/lib/db';
import { fa, faker } from '@faker-js/faker';

export const loadFakeData = async (numUsers: number = 10) => {
  console.log(`executing loadFakeData with ${numUsers} users`);

  try {
    // Create fake users
    for (let i = 0; i < numUsers; i++) {
      await prisma.user.create({
        data: {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          avatar: faker.internet.avatar(),
          posts: {
            create: {
              content: faker.lorem.sentence(),
            },
          },
        },
      });
    }

    // // Find all users
    // const users = await prisma.user.findMany();

    // // Create fake posts for each user
    // for (const user of users) {
    //   for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
    //     await prisma.posts.create({
    //       data: {
    //         content: faker.lorem.sentence(),
    //         author: {

    //         }
    //       }
    //     });
    //   }
    // }
  } catch (error) {
    throw new Error(`Error in loadFakeData: ${error}`);
  }
};
