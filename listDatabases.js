
use("admin");
dbs = db.runCommand({listDatabases: 1})
dbNames = []
for (var i in dbs.databases) { 
    dbNames.push(dbs.databases[i].name);
    console.log(dbNames[i]);
}
