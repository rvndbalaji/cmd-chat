$(document).ready(function () {

    var username = "cc";
    var cur = "cc";

    var history = new Josh.History({
        key: 'josh.helloworld'
    });
    var shell = Josh.Shell({
        history: history
    });

    shell.onNewPrompt(function (callback) {
        callback("<b>" + username + " $</b>");
    });
    /*
    shell.setCommandHandler("hello", {
        exec: function (cmd, args, callback) {
            var arg = args[0] || '';
            var response = "who is this " + arg + " you are talking to?";
            if (arg === 'rvnd') {
                response = 'Hey babe ;) ';
            } else if (arg === 'world') {
                response = 'world says hi.'
            } else if (!arg) {
                response = 'who are you saying hello to?';
            }



            callback(response);
        },
        completion: function (cmd, arg, line, callback) {
            callback(shell.bestMatch(arg, ['world', 'rvnd']))
        }
    });
    */

    //Login function uisng init
    shell.setCommandHandler("init", {
        exec: function (cmd, args, callback) {
            var response = "Invalid arguments : <i>init username password</i>";
            if (args.length == 2) {
                cur = username = args[0];
                var password = args[1];
                //Verify if username exists
                //Perform login
                response = "<br>Welcome <b>" + username + "</b><br><br>";
            }
            callback(response);
        }
    });

    //Show|Display function uisng show
    shell.setCommandHandler("show", {
        exec: function (cmd, args, callback) {

            if (username == "cc") {
                callback("Please log in");
                return;
            }

            var response = "Invalid arguments : <i>show cont</i>";

            if (args.length == 1) {
                var val = args[0];
                if (val == 'cont') {
                    //Load all contacts in array
                    response = "<br>Apoorva<br>Arun<br>Bindu<br>Harshitha<br>Vaishu<br><br>";
                }
            }
            callback(response);
        }
    });

    //Logout function uisng logout
    shell.setCommandHandler("logout", {
        exec: function (cmd, args, callback) {

            if (username == "cc") {
                callback("You're already logged off");
                return;
            }
            //Perform logout of user
            var response = "<br>Logged off<br><br>";
            cur = username = "cc";
            callback(response);
        }
    });
    shell.activate();


});
