set url="https://formations.cci-paris-idf.fr/IntNum/index.php"
start firefox.exe %url%
timeout 2
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{ENTER}')"