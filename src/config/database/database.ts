import { Environment } from "../../shared/helpers/Environment";

interface IDatabaseConfig {
  mongo: {
    uri: string;
  };
}

export const databaseConfig: IDatabaseConfig = {
  mongo: {
    uri: Environment.getEnvString("MONGO_URI"),
  },
};
