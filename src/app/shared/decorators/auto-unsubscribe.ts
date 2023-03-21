import { Subject, Subscription } from 'rxjs';
/**
 * 1. Create a function named "autoUnsubscribe" which takes a component as an argument and returns a new component.
2. In this function, define a new class called "AutoUnsubscribable" which extends the original component passed as an argument.
3. Inside the "AutoUnsubscribable" class, override the "ngOnDestroy()" method.
4. Inside the "ngOnDestroy()" method, get all property names of the class and filter out the properties which are instances of the "Subscription" class.
5. Loop through the filtered properties and unsubscribe them.
6. Decorate the original component with the "autoUnsubscribe" function so that the new component automatically unsubscribes subscriptions when it is destroyed.
* @Component
* @autoUnsubscribe 
* class ObsHomeComponent
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
/*-------------------------------------------------------------------*/
const subscriptions = Symbol();

export function UnsubscribeOnDestroy(): any {
  return function (targetClass: any, key: string): any {
    if (!targetClass[subscriptions]) {
      targetClass[subscriptions] = [];
      const originalNgOnDestroy = targetClass.ngOnDestroy;
      targetClass.ngOnDestroy = function () {
        targetClass[subscriptions].forEach((subscription: string) => {
          this[subscription]?.unsubscribe?.();
        });
        originalNgOnDestroy?.apply(this);
      };
    }
    targetClass[subscriptions].push(key);
  };
}

/*
@Component(...)
export class HelloWorldComponent extends BaseComponent {
  @UnsubscribeOnDestroy()
  subscription: Subscription; 

  constructor(
    private testService: TestService
  ) {
    this.subscription = testService.observableA
      .subscribe(val => {
        console.log(val);
      });
    
    ...
  }
}
*/

export function OnDestroy$(): PropertyDecorator {
  return function (target: any, propertyKey: string | symbol) {
    const subject = Symbol();
    const originalNgOnDestroy = target.ngOnDestroy;
    target.ngOnDestroy = function () {
      this[subject]?.next();
      this[subject]?.complete();
      originalNgOnDestroy?.apply(this);
    };

    Object.defineProperty(target, propertyKey, {
      get: function () {
        if (!this[subject]) {
          this[subject] = new Subject();
        }
        return this[subject];
      },
    });
  };
}
/*
@Component(...)
export class HelloWorldComponent extends BaseComponent {
  @OnDestroy$()
  destroy$!: Subject<void>;

  constructor(
    private testService: TestService
  ) {
    this.subscription = testService.observableA
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => {
        console.log(val);
      });
    
    ...
  }
}
*/
