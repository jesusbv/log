var searchIndex = {};
searchIndex["env_logger"] = {"doc":"A logger configured via an environment variable which writes to standard error.","items":[[3,"Logger","env_logger","The logger.",null,null],[3,"Builder","","Builder acts as builder for initializing the Logger. It can be used to customize the log format, change the enviromental variable used to provide the logging directives and also set the default log level filter.",null,null],[4,"Target","","Log target, either stdout or stderr.",null,null],[13,"Stdout","","",0,null],[13,"Stderr","","",0,null],[5,"try_init","","Initializes the global logger with an env logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"init","","Initializes the global logger with an env logger.",null,{"inputs":[],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Initializes the log builder with defaults",1,{"inputs":[],"output":{"name":"builder"}}],[11,"filter","","Adds filters to the logger",1,{"inputs":[{"name":"self"},{"name":"option"},{"name":"levelfilter"}],"output":{"name":"self"}}],[11,"format","","Sets the format function for formatting the log output.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"target","","Sets the target for the log output.",1,{"inputs":[{"name":"self"},{"name":"target"}],"output":{"name":"self"}}],[11,"parse","","Parses the directives string in the same form as the RUST_LOG environment variable.",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"self"}}],[11,"try_init","","Initializes the global logger with an env logger.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"init","","Initializes the global logger with an env logger.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"build","","Build an env logger.",1,{"inputs":[{"name":"self"}],"output":{"name":"logger"}}],[11,"new","","",2,{"inputs":[],"output":{"name":"logger"}}],[11,"filter","","",2,{"inputs":[{"name":"self"}],"output":{"name":"levelfilter"}}],[11,"enabled","","",2,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"log","","",2,{"inputs":[{"name":"self"},{"name":"record"}],"output":null}]],"paths":[[4,"Target"],[3,"Builder"],[3,"Logger"]]};
searchIndex["log"] = {"doc":"A lightweight logging facade.","items":[[3,"Record","log","The \"payload\" of a log message.",null,null],[3,"Metadata","","Metadata about a log message.",null,null],[3,"Location","","The location of a log message.",null,null],[3,"MaxLevelFilter","","A token providing read and write access to the global maximum log level filter.",null,null],[3,"SetLoggerError","","The type returned by [`set_logger`] if [`set_logger`] has already been called. [`set_logger`]: fn.set_logger.html",null,null],[3,"ShutdownLoggerError","","The type returned by [`shutdown_logger_raw`] if [`shutdown_logger_raw`] has already been called or if [`set_logger_raw`] has not been called yet. [`set_logger_raw`]: fn.set_logger_raw.html [`shutdown_logger_raw`]: fn.shutdown_logger_raw.html",null,null],[3,"ParseLevelError","","The type returned by [`from_str`] when the string doesn't match any of the log levels. [`from_str`]: https://doc.rust-lang.org/std/str/trait.FromStr.html#tymethod.from_str",null,null],[4,"Level","","An enum representing the available verbosity levels of the logger.",null,null],[13,"Error","","The \"error\" level.",0,null],[13,"Warn","","The \"warn\" level.",0,null],[13,"Info","","The \"info\" level.",0,null],[13,"Debug","","The \"debug\" level.",0,null],[13,"Trace","","The \"trace\" level.",0,null],[4,"LevelFilter","","An enum representing the available verbosity level filters of the logger.",null,null],[13,"Off","","A level lower than all log levels.",1,null],[13,"Error","","Corresponds to the `Error` log level.",1,null],[13,"Warn","","Corresponds to the `Warn` log level.",1,null],[13,"Info","","Corresponds to the `Info` log level.",1,null],[13,"Debug","","Corresponds to the `Debug` log level.",1,null],[13,"Trace","","Corresponds to the `Trace` log level.",1,null],[5,"max_level","","Returns the current maximum log level.",null,{"inputs":[],"output":{"name":"levelfilter"}}],[5,"try_set_logger","","Sets the global logger.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"set_logger","","Sets the global logger.",null,{"inputs":[{"name":"box"},{"name":"levelfilter"}],"output":null}],[5,"set_logger_raw","","Sets the global logger from a raw pointer.",null,{"inputs":[{"name":"m"}],"output":{"name":"result"}}],[5,"shutdown_logger","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"shutdown_logger_raw","","Shuts down the global logger.",null,{"inputs":[],"output":{"name":"result"}}],[5,"log_panics","","Deprecated",null,{"inputs":[],"output":null}],[8,"Log","","A trait encapsulating the operations required of a logger",null,null],[10,"enabled","","Determines if a log message with the specified metadata would be logged.",2,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[10,"log","","Logs the `Record`.",2,{"inputs":[{"name":"self"},{"name":"record"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,null],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"level"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"level"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"level"}],"output":{"name":"option"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"level"}],"output":{"name":"ordering"}}],[11,"from_str","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level.",0,{"inputs":[],"output":{"name":"level"}}],[11,"to_level_filter","","Converts the `Level` to the equivalent `LevelFilter`.",0,{"inputs":[{"name":"self"}],"output":{"name":"levelfilter"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",1,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"levelfilter"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":{"name":"bool"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"level"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":{"name":"option"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"level"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":{"name":"ordering"}}],[11,"from_str","","",1,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"max","","Returns the most verbose logging level filter.",1,{"inputs":[],"output":{"name":"levelfilter"}}],[11,"to_level","","Converts `self` to the equivalent `Level`.",1,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"args","","The message body.",3,{"inputs":[{"name":"self"}],"output":{"name":"arguments"}}],[11,"metadata","","Metadata about the log directive.",3,{"inputs":[{"name":"self"}],"output":{"name":"metadata"}}],[11,"location","","The location of the log directive.",3,{"inputs":[{"name":"self"}],"output":{"name":"location"}}],[11,"level","","The verbosity level of the message.",3,{"inputs":[{"name":"self"}],"output":{"name":"level"}}],[11,"target","","The name of the target of the directive.",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"cmp","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"self"},{"name":"metadata"}],"output":{"name":"bool"}}],[11,"hash","","",4,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"level","","The verbosity level of the message.",4,{"inputs":[{"name":"self"}],"output":{"name":"level"}}],[11,"target","","The name of the target of the directive.",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"location"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"cmp","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"self"},{"name":"location"}],"output":{"name":"bool"}}],[11,"hash","","",5,null],[11,"module_path","","The module path of the message.",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"file","","The source file containing the message.",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"line","","The line containing the message.",5,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get","","Gets the current maximum log level filter.",6,{"inputs":[{"name":"self"}],"output":{"name":"levelfilter"}}],[11,"set","","Sets the maximum log level.",6,{"inputs":[{"name":"self"},{"name":"levelfilter"}],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",7,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"self"},{"name":"parselevelerror"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"self"},{"name":"parselevelerror"}],"output":{"name":"bool"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",9,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[14,"log","","The standard logging macro.",null,null],[14,"error","","Logs a message at the error level.",null,null],[14,"warn","","Logs a message at the warn level.",null,null],[14,"info","","Logs a message at the info level.",null,null],[14,"debug","","Logs a message at the debug level.",null,null],[14,"trace","","Logs a message at the trace level.",null,null],[14,"log_enabled","","Determines if a message logged at the specified level in that module will be logged.",null,null]],"paths":[[4,"Level"],[4,"LevelFilter"],[8,"Log"],[3,"Record"],[3,"Metadata"],[3,"Location"],[3,"MaxLevelFilter"],[3,"SetLoggerError"],[3,"ShutdownLoggerError"],[3,"ParseLevelError"]]};
initSearch(searchIndex);
