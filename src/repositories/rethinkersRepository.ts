import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

const insertRethinker = async (rethinkerData: any) => {
  try {
    const newRethinkerId = await knexInstance("rethinkers").insert({
      rethinker_profile_image: rethinkerData.rethinker_profile_image,
      type_account: rethinkerData.type_account,
      name: rethinkerData.name,
      email: rethinkerData.email,
      area: rethinkerData.area,
      sub_area: rethinkerData.sub_area,
      project_1: rethinkerData.project_1,
      project_2: rethinkerData.project_2,
      project_3: rethinkerData.project_3,
    });
    return newRethinkerId;
  } catch (error) {
    throw error;
  }
};
const getRethinkerByEmail = async (email: string) => {
  try {
    const rethinker = await knexInstance("rethinkers")
      .where("email", email)
      .first();
    return rethinker;
  } catch (error) {
    throw error;
  }
};

const getAllRethinkers = async () => {
  try {
    const rethinkers = await knexInstance("rethinkers");
    return rethinkers;
  } catch (error) {
    throw error;
  }
};

export default {
  insertRethinker,
  getRethinkerByEmail,
  getAllRethinkers
};
