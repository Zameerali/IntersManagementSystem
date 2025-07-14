const db = require('../config/db.config.js');


module.exports = {
  assignProjectsToIntern: async (intern_id, project_ids) => {
    const values = project_ids.map((project_id) => [intern_id, project_id]);
    return db.query(
      'INSERT INTO intern_projects (intern_id, project_id) VALUES ?',
      [values]
    );
  },

  getProjectsByIntern: (intern_id) =>
    db.query(`
      SELECT p.*
      FROM projects p
      JOIN intern_projects ip ON p.id = ip.project_id
      WHERE ip.intern_id = ?
    `, [intern_id])
};
