function mergeMeetingTimes(meetingTimes) {
  var sortedMeetingTimes = meetingTimes.sort( //sort by startTime then end time if equal
  (a,b) => a.startTime === b.startTime ? a.endTime - b.endTime : a.startTime - b.startTime );

  const mergedMeetings = [];

    var currM; //current and next meeting times
    var nextM;
    for( i = 0; i < sortedMeetingTimes.length -1; i++){
      currM = sortedMeetingTimes[i];
      nextM = sortedMeetingTimes[i + 1];

      if(nextM.startTime <= currM.endTime){
        if(currM.startTime < nextM.startTime)
          nextM.startTime = currM.startTime;
        if(currM.endTime > nextM.endTime )
          nextM.endTime = currM.endTime;
        continue;
      }
      mergedMeetings.push(currM);
    }

    //add last element
    mergedMeetings.push(nextM);

  return mergedMeetings;
}

module.exports = mergeMeetingTimes;
