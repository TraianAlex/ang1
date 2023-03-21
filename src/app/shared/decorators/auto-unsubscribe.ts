import { Subscription } from 'rxjs';

/**
 * 1. Create a function named "autoUnsubscribe" which takes a component as an argument and returns a new component.
2. In this function, define a new class called "AutoUnsubscribable" which extends the original component passed as an argument.
3. Inside the "AutoUnsubscribable" class, override the "ngOnDestroy()" method.
4. Inside the "ngOnDestroy()" method, get all property names of the class and filter out the properties which are instances of the "Subscription" class.
5. Loop through the filtered properties and unsubscribe them.
6. Decorate the original component with the "autoUnsubscribe" function so that the new component automatically unsubscribes subscriptions when it is destroyed.
 * */
export function autoUnsubscribe(constructor: any) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    for (const prop in this) {
      const property = this[prop];
      if (property instanceof Subscription) {
        property.unsubscribe();
      }
    }
    original?.apply();
  };

  return constructor;
}
