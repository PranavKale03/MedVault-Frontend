export function SnakeToCamel(object) {
    if (typeof object !== "object") {
      return object;
    }
  
    if (Array.isArray(object)) {
      return object.map((item) => SnakeToCamel(item));
    }
  
    const camelObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const camelKey = key
          .replace(/_id$/, "id")
          .replace(/_([a-z])/g, (match, group) => group.toUpperCase());
        camelObject[camelKey] = SnakeToCamel(object[key]);
      }
    }
    return camelObject;
  }
  