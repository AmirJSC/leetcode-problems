function timeRequiredToBuy1(tickets: number[], k: number) {
  let count = 0;
  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] === 0) continue;
      tickets[i] = tickets[i] - 1;
      count++;
      if (tickets[k] === 0) {
        break;
      }
    }
  }
  return count;
}

function timeRequiredToBuy2(tickets: number[], k: number) {
  let front = 0;
  let count = 0;
  let size = tickets.length;
  while (tickets[k] !== 0) {
    if (tickets[front % size] === 0) {
      front++;
      continue;
    }
    tickets[front % size] = tickets[front % size] - 1;
    count++;
    front++;
  }
  return count;
}

function timeRequiredToBuy3(tickets: number[], k: number) {
  let queue = [];
  let time = 0;
  let result = new Array(tickets.length).fill(0);
  for (let i = 0; i < tickets.length; i++) {
    queue.push(i);
  }

  while (queue.length) {
    let person = queue.shift();
    tickets[person] -= 1;
    time++;
    result[person] = time;

    if (tickets[person] > 0) {
      queue.push(person);
    }
  }
  return result[k];
}
