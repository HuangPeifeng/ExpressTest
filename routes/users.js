const express = require('express');
const router = express.Router();

const crud = require('../mysql/sql');

const error = require('../mysql/error');

/** 
 * @swagger
 * /api/users:
 *    get:
 *       tags:
 *       - User
 *       summary: 取得列表
 */
router.get('/', async (req, res) => {
  try {

    const result = await crud.get('User');
    return res.send(result);

  } catch (e) {
    return error.serverError(e);
  }
});

/** 取得單筆 */
router.get('/:id', async (req, res) => {
  try {

    const result = await crud.get('User', 'id', req.params.id);
    if (!result.length) {
      return await error.notFound(e);
    }
    return res.send(result);

  } catch (e) {
    return error.serverError(e);
  }
});

/** 新增 */
router.post('/', async (req, res) => {
  try {

    const result = await crud.post('User', req.body);
    return res.send(result);

  } catch (e) {
    return error.serverError(e);
  }
});

/** 更新 */
router.put('/', async (req, res) => {
  try {

    const result = await crud.put('User', 'id', req.body);
    return res.send(result);

  } catch (e) {
    return error.serverError(e);
  }
});

/** 刪除 */
router.delete('/:id', async (req, res) => {
  try {

    const result = await crud.delete('User', 'id', req.params.id);
    return res.send(result);

  } catch (e) {
    return error.serverError(e);
  }
});

module.exports = router;