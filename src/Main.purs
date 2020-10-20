module Main where

import Prelude (not, (==), (||))
import Foreign (Foreign, isNull, isUndefined)

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

valueWhenEmpty :: Foreign → Foreign → Foreign
valueWhenEmpty defValue value =
  defaultWhen (\x -> (isUndefined x) || (isNull x) ) defValue value

defaultWhenEmpty :: Foreign → Foreign → Foreign
defaultWhenEmpty defValue value =
  defaultWhen (\x -> not ((isUndefined x) || (isNull x)) ) defValue value

showIfValueExist = valueWhenEmpty

-- filterOutKey :: forall a b. { a :: b } -> Array a -> { a :: b }
-- filterOutKey obj targetKey = obj
