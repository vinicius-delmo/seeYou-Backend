import rethinkersRepository from "../repositories/rethinkersRepository";

const registerRethinker = async (rethinkerData: any) => {
  try {
    const existingRethinker = await rethinkersRepository.getRethinkerByEmail(
      rethinkerData.email
    );
    if (existingRethinker) {
      throw new Error("Já existe um rethinker com este email.");
    }
    const newRethinkerId = await rethinkersRepository.insertRethinker(
      rethinkerData
    );
    return newRethinkerId;
  } catch (error) {
    throw error;
  }
};

const getAllRethinkers = async () => {
  try {
    const rethinkers = await rethinkersRepository.getAllRethinkers();
    return rethinkers;
  } catch (error) {
    throw error;
  }
};

export default {
  registerRethinker,
  getAllRethinkers,
};
