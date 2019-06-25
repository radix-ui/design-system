export type Nil = null | undefined;

export type ResponsivePropArray<T> = T[];

export interface ResponsivePropObject<T> {
  [key: string]: T;
}

export type ResponsiveProp<T> = ResponsivePropArray<T> | ResponsivePropObject<T>;

export type Prop<T> = T | ResponsiveProp<T> | Nil;

export type Length = number;
