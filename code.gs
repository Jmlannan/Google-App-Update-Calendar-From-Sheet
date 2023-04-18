function onOpen() {
    // Creating a drop down menu
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Update Calendar')
        .addItem('Move Selected to Calendar', 'UpdateCalendar')
        .addSeparator()
        .addToUi();
}

function UpdateCalendar() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var calendarID = sheet.getRange("L1").getValue(); //this gets the calendar ID from box L1
    var eventCal = CalendarApp.getCalendarById(calendarID);

    // Getting Actively selected boxes
    var range = sheet.getActiveRange();
    var events = range.getValues();

    //print what we got to the log
    console.log('Var events: ', events);

    for (x=0; x<events.length;x++)
    {
        // unpacking the selections we got should be selected as | DateTime for start | Event Name | Location
        var shift = events[x];
        var startTime = shift[0]; //the date time should be stored in the first column
        var endTime = new Date(startTime.getTime() +  60 * 60 * 1000); // this adds 1h to the start time to get the end time
        var eventname = shift[1]; //name of event should be in the second column
        var loc = shift[2]; //get the location from 3rd row, comment out to remove location functionality

        
        console.log('updating event: ', eventname, startTime, endTime); //print that data to the log
        eventCal.createEvent(eventname, startTime, endTime, {location: loc}); //update calendar
    }
}
