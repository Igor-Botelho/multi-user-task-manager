import auth from "./auth.service";

export default async function handleRequest(fn) {
  const authValidation = auth();

  if (!authValidation) {
    return;
  }

  try {
    const { data } = await fn;

    return data;
  } catch (error) {
    return { error: error.message };
  }
}
