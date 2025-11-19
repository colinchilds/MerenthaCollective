const getLevel = (level) => {
  switch (level) {
    case 'Newbie':
      return [1, 5];
    case 'Mid':
      return [6, 14];
    case 'Late Mid':
      return [15, 19];
    case 'High Mortal':
      return [20, 29];
    case 'Mid High Mortal':
      return [30, 39];
    case 'Late High Mortal':
      return [40, 49];
    case 'Elite':
      return [50, 69];
    case 'Late Elite':
      return [70, 89];
    case 'Legend':
      return [90, 109];
    case 'Mid Legend':
      return [110, 129];
    case 'Late Legend':
      return [130, 149];
    case 'Titan':
      return [150, 179];
    default:
      return [null, null];
  }
};

export default getLevel;
