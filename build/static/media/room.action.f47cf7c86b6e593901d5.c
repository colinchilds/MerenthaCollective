#include <std.h>

inherit ROOM;

void create() {
    ::create();
    set_short("action room");
    set_long("This is a room with an action: push button.");
}

void init() {
    ::init();
    add_action("cmd_push", "push");
}

int cmd_push(string input) {
    if (!input || input != "button") {
        write("Push what?");
        return 1;
    }
    write("You push the button.");
    say(this_player()->query_cap_name() + " pushes the button.");
    return 1;
}