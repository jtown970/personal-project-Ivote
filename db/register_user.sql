insert into users (user_name, hash, location)
values ( $1, $2, $3 ) returning user_id, user_name, location;

-- select * from users
-- where user_name = $1