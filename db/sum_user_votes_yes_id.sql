SELECT count(vote_yes) FROM user_votes
where vote_yes = true and users_id = $1;