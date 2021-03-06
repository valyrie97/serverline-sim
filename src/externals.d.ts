declare module "serverline";
declare module "telnet";
declare module "@kernel:base" {
  function exec(command: string, echo?: boolean): any;
  function autoColorString(str: string): string;
  function reverseAliasMap(): Map<string, string>
  type Instance = {
    module: string;
    functions: {
      [name: string]: (...args: any[]) => any
    };
    privateScope: {
      config: { [name: string]: any };
      ram: { [name: string]: any };
    }
  };
  type Id = string;
  type ParsedSystemState = {
    handoff: string,
    devMode: boolean,
    instances: {
      [id: Id]: {
        config: any,
        module: string
      }
    },
    aliases: {
      [alias: string]: Id
    }
  };
  type System = {
    aliases: Map<string, string>;
    instances: Map<string, Instance>;
    handoff: string;
    devMode: boolean;
  }
  const system: System;
}
declare module "@kernel:log-hook";
declare module "@commands:executor";
declare module "@commands:create";
declare module "@commands:ls";
declare module "@commands:save";
declare module "@commands:help";
declare module "@echo off";