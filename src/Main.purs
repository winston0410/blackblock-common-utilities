module Main where

import Prelude (not, (==), (||))
import Foreign (Foreign, isNull, isUndefined)

when :: forall a. (a → Boolean) → (a → a) → a → a
when predicate fn value =
  if predicate value == true
  then fn value
  else value

returnIf :: forall a b. (a → Boolean) → b → b → a -> b
returnIf predicate value1 value2 testValue =
  if (predicate testValue) == true
  then value1
  else value2

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
