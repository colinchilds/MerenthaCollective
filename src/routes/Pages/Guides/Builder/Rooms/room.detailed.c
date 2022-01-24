#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("detailed room");
    set_long("This is a detailed room.");
    set_listen("default", "It is quiet.");
    set_smell("default", "It has a smell.");
    set_properties(([
        "light": 2,
        "indoors": 1,
    ]));
    set_items(([
        "room": "Yes, it is very detailed.",
        "detail": "Quite a few actually.",
    ]));
}
