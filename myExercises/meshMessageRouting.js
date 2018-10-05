function meshMessageRouting(network, start, end){
  if(!network[start] || !network[end])
    throw new Error('Start and End route in network is required!');

  const networkVisited = {[start] : ''};

  const route = []; //finalized routes
  const stack = [start]; //queue it will be running through

  let found = false; //see if route was found

  loop: while(stack.length !== 0){ //while queue is not empty
    let node = stack.shift();

    if(!network[node]){ //if it is iteratable
      continue;
    }

    for(let contact of network[node]){ //loop through its network
      if(! (contact in networkVisited) ){
        networkVisited[contact] = node;
        stack.push(contact);
        if(contact === end){
          found = true;
          break loop;
        }
      }
    }
  }

  if(!found)
    return null;

  let current = end;
  while(current != ''){
    route.push(current);
    current = networkVisited[current];
  }


  /* add later if route is empty throw and error */
  return route.reverse();
}

module.exports = meshMessageRouting;
