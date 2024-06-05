import { ReactParamsType } from 'xbsj-xe2/dist-node/xe2-base-utils';
/**
 * 把朝北的坐标架转成朝东的
 * @param northRotationReact
 * @param eastRotationReact
 * @returns
 */
export declare function bindNorthRotation(northRotationReact: ReactParamsType<[number, number, number] | undefined>, eastRotationReact: ReactParamsType<[number, number, number] | undefined>): () => any;
