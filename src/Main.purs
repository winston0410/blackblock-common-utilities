module Main where

import Prelude
import Foreign

when :: forall a. (a → Boolean) → (a → a) → a → a
when predicate fn value =
  if predicate value == true
  then fn value
  else value

defaultWhen :: forall a. (a → Boolean) → a → a → a
defaultWhen predicate defValue value =
  if predicate value == true
  then value
  else defValue

defaultWhenEmpty :: Foreign → Foreign → Foreign
defaultWhenEmpty defValue value =
  defaultWhen
  (\x -> not ((isUndefined x) || (isNull x)) )defValue value
  -- (\x -> (not (isNull x)) || (not (isUndefined x) ) defValue value
