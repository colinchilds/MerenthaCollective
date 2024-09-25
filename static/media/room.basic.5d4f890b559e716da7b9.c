#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("basic room");
    set_long("This is a basic room.");
}