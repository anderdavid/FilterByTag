const getTypeOfDelivery = (tag) => {
  const PICKUP = 'pickup';
  const EXPRESS = 'express';

  switch (tag) {
    case 'arauco_pickup':
      return PICKUP;
    case 'Arauco_Pickup':
      return PICKUP;
    case 'Arauco_pickup':
      return PICKUP;
    case 'ARAUCO_PICKUP':
      return PICKUP;
    case 'ARAUCOPICKUP':
      return PICKUP;
    case 'arauco_delivery':
      return EXPRESS;
    case 'Arauco_Delivery':
      return EXPRESS;
    case 'Arauco_delivery':
      return EXPRESS;
    case 'ARAUCO_DELIVERY':
      return EXPRESS;
    case 'ARAUCODELIVERY':
      return EXPRESS;
    default:
      return false;
  }
};

const filterOrderByTag = (tags) => {
  const tagsArray = tags.split(',');

  for (let tag of tagsArray) {
    tag = tag.trim();
    const type = getTypeOfDelivery(tag);
    if (type !== false) {
      return type;
    }
  }
  return false;
};

module.exports = {
  filterOrderByTag
};
