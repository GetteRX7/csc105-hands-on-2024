import { db } from "../index.js";

const isDuplicate = async (firstName: string, lastName: string) => {
  return await db.user.findFirst({
    where: { firstName, lastName },
  });
};

const createUser = async (firstName: string, lastName: string) => {
  return await db.user.create({
    data: { firstName, lastName },
  });
};

const getAllUsers = async () => {
  return await db.user.findMany();
};

const updateUser = async (id: number, firstName?: string, lastName?: string) => {
  return await db.user.update({
    where: { id },
    data: {
      ...(firstName && { firstName }),
      ...(lastName && { lastName }),
    },
  });
};

export { isDuplicate, createUser, getAllUsers, updateUser };
