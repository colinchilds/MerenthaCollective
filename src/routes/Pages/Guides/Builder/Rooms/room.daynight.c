#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("day night room");
    set_day_long("This a room during the day.");
    set_night_long("This a room during the night.");
    set_properties(([
        "light": 2,
        "night light": 0,
    ]));
}
