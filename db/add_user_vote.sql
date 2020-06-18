insert into user_votes (item_id, users_id, vote_yes)
values(${item_id}, ${users_id}, ${vote_yes}) returning *;