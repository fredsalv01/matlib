export const generateId = () => window.URL.createObjectURL(new Blob([])).slice(-36);

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve,ms))