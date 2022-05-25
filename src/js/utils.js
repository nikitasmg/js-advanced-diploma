export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if(index === 0) {
    return 'top-left'
  }
  else if (index > 0 && index < 7) {
    return 'top'
  }
  else if(index === 7) {
    return 'top-right'
  }
  else if([8,16,24,32,40,48].some(el => el === index)) {
    return 'left'
  }
  else if([7,15,23,31,39,47,55].some(el => el === index)) {
    return 'right'
  }
  else if(index === 56) {
    return 'bottom-left'
  }
  else if(index === 63) {
    return 'bottom-right'
  }
  else if(index > 56 && index < 63) {
    return 'bottom'
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
