 $(document).ready(function () {
     var history = new Josh.History({
         key: 'josh.helloworld'
     });
     var shell = Josh.Shell({
         history: history
     });

     shell.onNewPrompt(function (callback) {
         callback("cc $");
     });
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
     shell.activate();
 });
