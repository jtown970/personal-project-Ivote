insert into house_votes (item_id, houses_id, voted_yes, passed)
values(${item_id}, ${houses_id}, ${voted_yes}, ${passed}) returning *;