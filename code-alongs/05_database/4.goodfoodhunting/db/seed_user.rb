require 'bcrypt'
require 'pg'
require_relative 'data_access'

email = 'steve@mail.com'
password_digest = BCrypt::Password.create('bob')

sql = "INSERT INTO users (email, password_digest) VALUES ('#{email}', '#{password_digest}')"
run_sql(sql)