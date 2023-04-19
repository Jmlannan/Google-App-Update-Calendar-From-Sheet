# Google-App-Update-Calendar-From-Sheet
This is a google app script that allows you to move an event listed in a google sheet onto a calendar.

To use create a spread sheet, open extensions>app sripts then copy and paste the code.gs file into the editor. Save it then reload the spread sheet and you should see the new menu option "Update Calendar"

Put your calendarID in L1 on the sheet then you can format your sheet with:
|  DateTime  |  Name of Event  |  Location  |

The default duration is 1h but that can be changed in the code.

To then transfer the data to a calendar, highlight the events you want to move and click the update calendar>move selected to calendar.
