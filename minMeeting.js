function minMeeting(timeSlots){
  let numRooms = 0;
  let curr = 0;
  const start = [];
  const end = [];

  timeSlots.forEach(s => {
    start.push(s[0]);
  });
  timeSlots.forEach(e => {
    end.push(e[1]);
  });

  start.sort((a,b) => {
    return b - a;
  });
  end.sort((a,b) => {
    return b - a;
  });

  while(start.length > 0){
    if(start[start.length-1] <= end[end.length-1]){
      start.pop();
      curr++;
    }
    else{
      end.pop();
      curr--;
    }

    if(numRooms < curr)
      numRooms = curr;
  }

  return numRooms;
}

const times = [[12,16],[13,13.5],[13,14],[14,15],[15,16]];

console.log(minMeeting(times));
