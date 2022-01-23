#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("basic room");
    set_long("This is a basic room.");
    set_listen("default", "It is quiet.");
    set_smell("default", "It has a neutral odor.");
    set_properties(([
        "light": 2,
        "night light": 1,
        "indoors": 1,
    ]));
    set_exits(([

    ]));
}