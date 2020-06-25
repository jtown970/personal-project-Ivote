select count(voted_yes) from house_votes
where voted_yes = false and houses_id = $1;