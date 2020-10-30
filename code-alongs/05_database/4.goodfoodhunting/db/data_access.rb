
def run_sql(sql, params = [])
  db = PG.connect(dbname: 'goodfoodhunting')
  results = db.exec(sql, params)
  db.close
  results
end

############ User ######################
def find_user_by_email(email)
  results = run_sql("SELECT * FROM users WHERE email = '#{email}';")
  results[0]
end

def find_user_by_id(id)
  results = run_sql("SELECT * FROM users WHERE id = #{id};")
  results[0]
end

def all_users
  sql = "SELECT * FROM users"
  run_sql(sql)
end

############ Dishes ######################
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


############ comments ######################
def create_comment (content, user_id, dish_id) 
  sql = "INSERT INTO comments (content, user_id, dish_id)
  VALUES ($1, $2, $3 )"
  run_sql(sql, [content, user_id, dish_id])
end

def all_comments () 
  sql = "SELECT * FROM comments"
  run_sql(sql)
end

def find_comments_by_dish (dish_id)
  sql = "SELECT * FROM comments WHERE dish_id = $1"
  run_sql(sql, [dish_id])
end

def delete_comment_by_id (id)
  sql="DELETE FROM comments WHERE id = $1"
  run_sql(sql, [id])
end