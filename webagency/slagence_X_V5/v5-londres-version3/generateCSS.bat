start ..\..\slagence_X_V5\sources\generate.debug.bat %CD% ^&^& exit
ping -n 3 127.0.0.1 >nul 
start ..\..\slagence_X_V5\sources\generate.production.bat %CD% ^&^& exit
exit