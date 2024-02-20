// TODO: Add comment

const version = import.meta.env.VITE_VERSION as string;

const isDev = import.meta.env.MODE === "development";

export { version, isDev };
