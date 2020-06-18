-- select house_id, rep_name, location, house_votes_id, reps_id, item, passed, voted_yes from house
-- join house_votes on house.house_id = house_votes.house_votes_id;

select house_votes_id, rep_name, location, item_name, passed, voted_yes from house_votes
join items on house_votes.house_votes_id = items.item_id;