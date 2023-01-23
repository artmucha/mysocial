import qs from "qs";

export const formatDate = date => {
  const newDate = new Date(date);
  return Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(newDate);
};

export const getImageUrl = (url) => {
  if (!url) url = '/uploads/placeholders/placeholder.jpg';
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }
  return null
};

export const getStrapiURL = (path = "") => {
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
    }${path}`
};

export const fetchAPI = async (path, urlParamsObject = {}, options = {}) => {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json"
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText)
    throw new Error(`Wystąpił błąd. Spróbuj ponownie później`)
  };

  const data = await response.json();

  return data;
};