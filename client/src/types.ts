//FIXED LENGTH ARRAY TYPE
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
export type FixedLengthArray<T extends any[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator< ArrayItems<T> > }

export interface ISidebarLink{
  name: string
  icon: string
  path: string
}

export interface ITag{
  name: string
  color: 'blue' | 'red' | 'green'
}

export interface INote {
  date: string
  theme: string
  text: string
  tags: ITag[]
}


