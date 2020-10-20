require 'pg'

def run_sql(sql) 
    db = PG.connect(dbname: 'movies')
    results = db.exec(sql)
    db.close
    return results
  end
