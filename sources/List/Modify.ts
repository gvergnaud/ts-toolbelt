import {At} from './At'
import {Replace} from '../Union/Replace'
import {x} from '../Any/x'
import {List} from './List'
import {Cast} from '../Any/Cast'

/**
 * Modify `L` with `LMod` & the [[x]] placeholder
 * @param L to copy from
 * @param LMod to copy to
 * @returns [[List]]
 * @example
 * ```ts
 * ```
 */
export type Modify<L extends List, LMod extends List> = Cast<{
    [K in keyof LMod]: Replace<LMod[K], x, Exclude<At<L, K>, undefined>>
}, List>