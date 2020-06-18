-- select user_votes_id, user_id, item, user_name, location, vote_yes from users
-- join user_votes on users.user_id = user_votes.user_votes_id;

-- select user_votes_id, item_name, user_name, location, vote_yes from users
-- join user_votes on users.user_id = user_votes.user_votes_id
-- join items on user_votes.user_votes_id = items.item_id

-- select * from user_votes

--think this will work
select user_votes_id, users_id, item_name, vote_yes from user_votes
join items on user_votes.user_votes_id = items.item_id;
