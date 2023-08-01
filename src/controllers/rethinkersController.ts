import rethinkersService from '../services/rethinkersService';
import { Request, Response } from 'express';

// Controller para cadastrar um novo 'rethinker'
const registerRethinker = async (req:Request, res:Response ) => {
 
  try {
    await rethinkersService.registerRethinker(req.body);
    return res.status(201).json({ message: 'Rethinker cadastrado com sucesso!' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao cadastrar rethinker.' });
  }
};

const getAllRethinkers = async (req: Request, res: Response) => {
  try {
    const rethinkers = await rethinkersService.getAllRethinkers();
    return res.status(200).json(rethinkers);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao obter os rethinkers.' });
  }
};

export default {
  registerRethinker,
  getAllRethinkers
};