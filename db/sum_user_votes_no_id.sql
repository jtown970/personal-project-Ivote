SELECT count(vote_yes) FROM user_votes
where vote_yes = false and users_id = $1;

