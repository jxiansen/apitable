

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/cf21303edea9abd919ecdab84698c6ab8513b1c2/classnames/index.d.ts
declare type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
	[id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> { }

interface ClassNamesFn {
	(...classes: ClassValue[]): string;
}

declare var classNames: ClassNamesFn;

declare module "classnames" {
	export = classNames
}
