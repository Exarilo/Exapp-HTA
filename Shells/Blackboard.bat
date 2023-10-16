@echo off
set url="https://esiee-it.blackboard.com/auth-saml/saml/login?apId=_3022_1&redirectUrl=https%3A%2F%2Fesiee-it.blackboard.com%2Fultra"
start firefox.exe %url%
timeout 3
powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SendKeys]::SendWait('{ENTER}')"
