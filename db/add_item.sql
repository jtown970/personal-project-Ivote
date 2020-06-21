insert into items (item_name, description )
values ( $1, $2) returning * ;