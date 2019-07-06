import {Omit as OOmit} from '../Object/Omit'

/** Transform a **tuple** into an **`object`**
 * @param T to transform
 * @returns **`object`**
 * @example
 * ```ts
 * ```
 */
export type ObjectOf<T extends object> =
    OOmit<T, keyof any[]>
