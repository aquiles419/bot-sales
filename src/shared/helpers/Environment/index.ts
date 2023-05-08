import "dotenv/config";

export class Environment {
  public static getEnv<T>(name: string): T {
    const variable = process.env[name];

    if (!variable) {
      console.error(`[Environment] Missing ${name} environment variable`);
      process.exit(1);
    }

    return variable as unknown as T;
  }

  public static getEnvString(name: string): string {
    const variable = process.env[name];

    if (!variable) {
      console.error(`[Environment] Missing ${name} environment variable`);
      process.exit(1);
    }

    return variable;
  }

  public static getEnvNumber(name: string): number {
    const variable = process.env[name];

    if (!variable) {
      console.error(`[Environment] Missing ${name} environment variable`);
      process.exit(1);
    }

    const convertedNumber = Number(variable);

    if (Number.isNaN(convertedNumber)) {
      console.error(
        `[Environment] Value ${variable} of variable ${name} is not valid as a number`
      );
      process.exit(1);
    }

    return convertedNumber;
  }

  public static getEnvBoolean(name: string): boolean {
    const variable = process.env[name];

    if (!variable) {
      console.error(`[Environment] Missing ${name} environment variable`);
      process.exit(1);
    }

    if (!variable.match(/true|false/)) {
      console.error(
        `[Environment] Value ${variable} of variable ${name} is not valid as a boolean`
      );
      process.exit(1);
    }

    return variable === "true";
  }
}
