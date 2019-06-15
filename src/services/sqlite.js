import SQLiteHelper from 'react-native-sqlite-helper';
 
const sqLiteHelper = new SQLiteHelper('eccole','1','eccole',3000);

export async function executeDb(){
    try {
      sqLiteHelper.open();
      await sqLiteHelper.createTable({
        tableName: 'usuarios',
          tableFields: [
              {
                  columnName: 'id',
                  dataType: 'INTEGER PRIMARY KEY AUTOINCREMENT',
              },
              {
                  columnName: 'nombre',
                  dataType: 'varchar',
              }, {
                  columnName: 'email',
                  dataType: 'varchar',
              }, {
                  columnName: 'fono',
                  dataType: 'varchar',
              },
              {
                columnName: 'clave',
                dataType: 'varchar',
              },
              {
                columnName: 'foto',
                dataType: 'varchar',
              },
          ],
      });
      await sqLiteHelper.createTable({
        tableName: 'locales',
          tableFields: [
              {
                  columnName: 'id',
                  dataType: 'INTEGER PRIMARY KEY AUTOINCREMENT',
              },
              {
                  columnName: 'nombre',
                  dataType: 'varchar',
              }, {
                  columnName: 'descripcion',
                  dataType: 'varchar',
              }, {
                  columnName: 'direccion',
                  dataType: 'varchar',
              },
              {
                columnName: 'tipo',
                dataType: 'varchar',
              },
              {
                columnName: 'inicio',
                dataType: 'time',
              },
              {
                columnName: 'termino',
                dataType: 'time',
              },
              {
                columnName: 'admin',
                dataType: 'integer',
              },
          ],
      });
      await sqLiteHelper.insertItems('locales', [
        {
          nombre : "local nombre",
          descripcion : "este es un local mu bkn",
          direccion : "pasaje cjaiten 2329",
          tipo : "pub",
          inicio : "09:00",
          termino : "03:00",
          admin : 1
        }
      ]);
      const { res, err } = await sqLiteHelper.selectItems('locales', '*', null, 1, 5);
      alert(JSON.stringify(res))
    }catch(err){
      alert("ERROR")
      alert(err.message)
    }
}

export async function getAllLocals(){
  sqLiteHelper.open();
  const { res, err } = await sqLiteHelper.selectItems('locales', '*', null, 1, 5);
  sqLiteHelper.close();
  return res;
}
export async function insertLocal({nombre,descripcion,direccion,tipo,inicio,termino,admin}){
  sqLiteHelper.open();
  const { res, err } = await sqLiteHelper.insertItems('locales', [{
    nombre,descripcion,direccion,tipo,inicio,termino,admin
  }]);
  sqLiteHelper.close();
  return res;
}
export async function deleteLocal(id){
  sqLiteHelper.open();
  const { res, err } = await sqLiteHelper.deleteItem('locales',{id});
  sqLiteHelper.close();
  return res;
}