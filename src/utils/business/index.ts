export async function setDefaultProperties<T>(originObj: T, defaultObj: T) {
  return new Promise((resolve, reject) => {
    Object.keys(defaultObj).forEach((v, index) => {
      if (originObj[v as keyof T] === null || originObj[v as keyof T] === undefined) {
        originObj[v as keyof T] = defaultObj[v as keyof T]
      }
      if (index === Object.keys(defaultObj).length - 1) {
        resolve(null)
      }
    })
  })
}

export const isNotEmptyObject = (obj: any): boolean => {
  if (typeof obj === "object") {
    if (Object.keys(obj).length > 0) {
      return true;
    }
  }
  return false;
}