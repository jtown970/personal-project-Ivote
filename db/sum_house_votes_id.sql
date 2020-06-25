select count(voted_yes) from house_votes
where voted_yes = true and houses_id = $1;