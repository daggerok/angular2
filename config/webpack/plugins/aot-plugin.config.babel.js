import { pathTo } from '../utils.babel';

export default {
  mainPath: pathTo('./src/main.ts'),
  tsConfigPath: pathTo('./src/tsconfig.json'),
  entryModule: pathTo('./src/app/app.module#AppModule'),
};
