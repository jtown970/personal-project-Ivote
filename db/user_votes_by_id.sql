select user_votes_id, item_name, user_name, location, vote_yes from users
join user_votes on users.user_id = user_votes.user_votes_id
join items on user_votes.user_votes_id = items.item_id