import express from 'express';
import { delStudent, getAllStudents, getStudentById, newStudent, updateMany, updateStudent } from '../controllers/dbController.js';

const router = express.Router();

router.route('/students').get(getAllStudents)
router.route('/students/:id').get(getStudentById).delete(delStudent).put(updateStudent)
router.route('/students').post(newStudent)

router.route('/migration').get(updateMany)

export default router