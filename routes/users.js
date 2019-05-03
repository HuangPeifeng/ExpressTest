const express = require('express');
const router = express.Router();

const crud = require('../mysql/sql');

const error = require('../mysql/error');

/** 取得列表 */
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


// /* GET users List */
// router.get('/', function (req, res, next) {
//   connection.query('SELECT * FROM User', (error, rows) => {
//     if (error) {
//       res.status(500).send(error);
//       return;
//     }
//     res.send(rows);
//   });
// });

// /* GET users by id */
// router.get('/:id', function (req, res, next) {
//   connection.query('SELECT * FROM User WHERE Id = ?', req.params.id, (error, rows) => {
//     if (error) {
//       res.status(500).send(error);
//       return;
//     }
//     if (!rows.length) {
//       res.status(404).send('Not Found');
//       return;
//     }
//     res.send(rows[0]);
//   });
// });

// /* POST users create */
// router.post('/', (req, res, next) => {
//   var sql = {
//     name: req.body.name
//   };
//   connection.query('INSERT INTO User SET ?', sql, (error, rows) => {
//     if (error) {
//       res.status(500).send(error);
//       return;
//     }
//     res.send(rows);
//   });
// });

// /* PUT users update */
// router.put('/', (req, res, next) => {
//   var id = req.body.id;
//   var item = req.body;
//   connection.query('UPDATE User SET ? WHERE id = ?', [item, id], (error, rows) => {
//     if (error) {
//       res.status(500).send(error);
//       return;
//     }
//     res.send(rows);
//   });
// });

// /* DELETE users by id */
// router.delete('/:id', (req, res, next) => {
//   connection.query('DELETE FROM User WHERE id = ?', req.params.id, (error, rows) => {
//     if (error) {
//       res.status(500).send(error);
//       return;
//     }
//     res.send(rows);
//   });
// });

module.exports = router;