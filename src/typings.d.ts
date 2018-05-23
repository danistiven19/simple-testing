import * as Sinon from 'sinon';
/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare global {
  let sinon: Sinon.SinonStatic
}