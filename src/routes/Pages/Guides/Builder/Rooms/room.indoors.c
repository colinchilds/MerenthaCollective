#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("indoors room");
    set_long("This is an indoors room.");
    set_properties(([
        "indoors": 1,
    ]));
}