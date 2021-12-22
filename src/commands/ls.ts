import { system, autoColorString, reverseAliasMap } from '@kernel:base';
import chalk from 'chalk';

export default function ls(flags: any) {
  // if(flags) console.log(flags)

  console.log('Instances', chalk.ansi256(242)('(' + system.instances.size + ')'));
  const aliases = reverseAliasMap();
  for(const [id, instance] of system.instances) {
    if(aliases.has(id)) {
      console.log('  ' + autoColorString(aliases.get(id)) + chalk.ansi256(242)(' (' + id + ')'));
    } else {
      console.log('  ' + autoColorString(id.substring(0, 8)) + chalk.ansi256(242)(' (' + instance.module + ')'));
    }

    for(const [configKey, configVal] of Object.entries(instance.privateScope.config)) {
      console.log('    ' + chalk.ansi256(240)(configKey + ': ' + configVal));
    }
  }
}