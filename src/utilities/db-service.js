import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

const tableName = 'quetaldiaData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'que-tal-dia.db', location: 'default'});
};

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (fecha TEXT NOT NULL, mensaje TEXT, estado TEXT NOT NULL);`;

  await db.executeSql(query);
};

export const getDiaItems = async db => {
  try {
    const diaItems = [];
    const results = await db.executeSql(
      `SELECT rowid as id,fecha,estado,mensaje FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        diaItems.push(result.rows.item(index));
      }
    });
    return diaItems;
  } catch (error) {
    console.error(error);
    throw Error('Error al obtener los elementos del día');
  }
};

export const saveDiaItems = async (db, diaItems) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName} (rowid, fecha, estado, mensaje) values` +
    diaItems
      .map(i => `(${i.id}, '${i.fecha}', '${i.estado}', '${i.mensaje}');`)
      .join(',');
  console.log(insertQuery)
  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id};`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async db => {
  const query = `drop table ${tableName};`;
  await db.executeSql(query);
};
