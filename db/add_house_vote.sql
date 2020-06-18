insert into house_votes (item_id, rep_name, location, voted_yes, passed)
values(${item_id}, ${rep_name}, ${location}, ${voted_yes}, ${passed}) returning *;