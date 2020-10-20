def run_sql(sql) 
    db = PG.connect(dbname: 'goodfoodhunting')
    results = db.exec(sql)
    db.close
    return results
  end