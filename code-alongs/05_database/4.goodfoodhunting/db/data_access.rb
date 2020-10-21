
def run_sql(sql, params = [])
  db = PG.connect(dbname: 'goodfoodhunting')
  results = db.exec(sql, params)
  db.close
  results
end

def find_user_by_email(email)
  results = run_sql("SELECT * FROM users WHERE email = '#{email}';")
  results[0]
end

def find_user_by_id(id)
  results = run_sql("SELECT * FROM users WHERE id = #{id};")
  results[0]
end

def find_dish_by_id(id)
  results = run_sql("SELECT * FROM dishes WHERE id = #{id};")
  results[0]
end

def all_dishes
  run_sql('SELECT * FROM dishes')
end

def add_dish(name, image_url, user_id)
  run_sql("INSERT INTO dishes(name, image_url, user_id) VALUES('#{name}', '#{image_url}', '#{user_id}');")
end

def delete_dish(id)
  run_sql("DELETE FROM dishes WHERE id = '#{id}';")
end

def edit_dish(id, name, image_url)
  run_sql("UPDATE dishes SET name = $2, image_url = $3 where id = $1;", [id, name, image_url])
end
