export interface Options {
    onlyRunOnBadCase?: boolean;
}
export default class ProperNameCase {
    private defaultOptions;
    private lowerCaseExceptions;
    fixCase(name: string, options?: Options): string;
    private special;
    private fixMcsMacs;
}
