

export function getDefaultHeader() {
  return {
    Authorization: process.env.BEARER_TOKEN,
  };
}
