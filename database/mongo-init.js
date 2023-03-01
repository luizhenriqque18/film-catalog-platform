conn = new Mongo();
db = conn.getDB("film-catalog");
db.createCollection('test');