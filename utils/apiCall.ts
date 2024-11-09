export const apiCall = async (url: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${url}`
  );
  const data = await response.json();
  return data
};
