import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/61e15e8f-c8e2-4b16-9bc4-a15be995f30a/github/main', token: 'ce3d58562fbc2f2f2b82af7a65b5bebf4e6ba0a4', queries });
export default client;
  