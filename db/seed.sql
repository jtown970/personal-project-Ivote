-- DROP TABLE IF EXISTS user_votes;
-- DROP TABLE IF EXISTS house_votes;
-- DROP TABLE IF EXISTS house;
-- DROP TABLE IF EXISTS all_votes;
-- DROP TABLE IF EXISTS users;

-- create table users (
--     user_id serial primary key,
--     user_name varchar(20),
--     password text,
--     location varchar(2)
-- );

-- create table user_votes (
--     user_votes_id serial primary key,
--     users_id int references users(user_id),
--     item_id int references item(item_id),
--     vote_yes boolean
-- );

-- create table house ( 
--     house_id serial primary key,
--     rep_name varchar(100),
--     location varchar(10)
-- );

-- create table house_votes (
--     house_votes_id serial primary key,
--     reps_id int references house(house_id),
--     item text,
--     passed boolean,
--     voted_yes boolean
-- ); 

-- select user_votes_id, user_id, item, user_name, location, vote_yes from users
-- join user_votes on users.user_id = user_votes.user_votes_id;

-- select house_id, rep_name, location, house_votes_id, reps_id, item, passed, voted_yes from house
-- join house_votes on house.house_id = house_votes.house_votes_id;

DROP TABLE IF EXISTS user_votes;
DROP TABLE IF EXISTS house_votes;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS users;


create table users (
    user_id serial primary key,
    user_name varchar(20),
    password text,
    location varchar(2)
);

create table items (
    item_id serial primary key,
    item_name text
    description text
    full_description text
);

create table user_votes (
    user_votes_id serial primary key,
    users_id int references users(user_id),
    item_id int references item(item_id),
    vote_yes boolean
);


create table house_votes (
    house_votes_id serial primary key,
    item_id int references item(item_id),
    rep_name varchar(100),
    location varchar(10),
    voted_yes boolean,
    passed boolean
);

select house_votes_id, rep_name, location, item_name, passed, voted_yes from house_votes
join items on house_votes.house_votes_id = items.item_id;









