select count(voted_yes) from house_votes
where voted_yes = true and house_votes_id = $1;