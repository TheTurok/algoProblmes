function mergeMeetingTimes(meetingTimes) {
  var sortedMeetingTimes = meetingTimes.sort( //sort by startTime then end time if equal
    (a,b) => a.startTime === b.startTime ? a.endTime - b.endTime : a.startTime - b.startTime );

    var currM; //current and next meeting times
    var nextM;
    for( i = 0; i < sortedMeetingTimes.length -1 ; i++){
      currM = sortedMeetingTimes[i];
      nextM = sortedMeetingTimes[i + 1];

      if(nextM.startTime <= currM.endTime){
        if(currM.endTime < nextM.endTime ) {
          currM.endTime = nextM.endTime;
        }
        sortedMeetingTimes.splice(i+1,1);
        i--;
      }
    }
  return sortedMeetingTimes;
}

module.exports = mergeMeetingTimes;
