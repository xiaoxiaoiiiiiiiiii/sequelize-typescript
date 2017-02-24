import 'reflect-metadata';
import {addAttributeOptions} from "../../utils/models";

/**
 * Checks for url format (http://foo.com)
 */
export function IsUrl(target: any, propertyName: string): void {

  addAttributeOptions(target, propertyName, {
    validate: {
      isUrl: true
    }
  });
}