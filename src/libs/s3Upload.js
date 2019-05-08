import { Storage } from "aws-amplify";

export default async file => {
  const filename = `${Date.now()}-${file.name}`;
  const uploadedFile = await Storage.vault.put(filename, file, {
    contentType: file.type
  });
  return uploadedFile.key;
};
