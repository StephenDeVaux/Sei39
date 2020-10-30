require 'bcrypt'
require 'pg'
require_relative 'data_access'

email = 'steve@mail.com'
password_digest = BCrypt::Password.create('bob')
email2 = 'a@mail.com'
password_digest2 = BCrypt::Password.create('bob')
email3 = 'b@mail.com'
password_digest3 = BCrypt::Password.create('bob')

sql = "INSERT INTO users (email, password_digest) VALUES ('#{email}', '#{password_digest}')"
run_sql(sql)

run_sql("INSERT INTO users (email, password_digest) VALUES ('#{email2}', '#{password_digest2}')")
run_sql("INSERT INTO users (email, password_digest) VALUES ('#{email3}', '#{password_digest3}')")