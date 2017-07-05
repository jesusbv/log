initSidebarItems({"enum":[["Level","An enum representing the available verbosity levels of the logger."],["LevelFilter","An enum representing the available verbosity level filters of the logger."]],"fn":[["log_panics","Deprecated"],["max_level","Returns the current maximum log level."],["set_logger","Sets the global logger."],["set_logger_raw","Sets the global logger from a raw pointer."],["shutdown_logger","Shuts down the global logger."],["shutdown_logger_raw","Shuts down the global logger."],["try_set_logger","Sets the global logger."]],"macro":[["debug","Logs a message at the debug level."],["error","Logs a message at the error level."],["info","Logs a message at the info level."],["log","The standard logging macro."],["log_enabled","Determines if a message logged at the specified level in that module will be logged."],["trace","Logs a message at the trace level."],["warn","Logs a message at the warn level."]],"struct":[["Location","The location of a log message."],["MaxLevelFilter","A token providing read and write access to the global maximum log level filter."],["Metadata","Metadata about a log message."],["ParseLevelError","The type returned by [`from_str`] when the string doesn't match any of the log levels. [`from_str`]: https://doc.rust-lang.org/std/str/trait.FromStr.html#tymethod.from_str"],["Record","The \"payload\" of a log message."],["SetLoggerError","The type returned by [`set_logger`] if [`set_logger`] has already been called. [`set_logger`]: fn.set_logger.html"],["ShutdownLoggerError","The type returned by [`shutdown_logger_raw`] if [`shutdown_logger_raw`] has already been called or if [`set_logger_raw`] has not been called yet. [`set_logger_raw`]: fn.set_logger_raw.html [`shutdown_logger_raw`]: fn.shutdown_logger_raw.html"]],"trait":[["Log","A trait encapsulating the operations required of a logger"]]});