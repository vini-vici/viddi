/**
 * @description a utility class to assist with chaining HTML class names back and forth.
 *
 * We cannot create a DOMTokenList directly, and creating an entire DOMNode just to hijack it's
 * classList operator seems silly.
 */
export default class DomClasses {
    #private;
    /**
     *
     * @param initialClasses the initial classes for our item to contain
     */
    constructor(...initialClasses: string[]);
    /**
     *
     * @param className the name of the class(es) we want to check for.
     * @returns if a single class was provided, true if present. If multiple classes were
     * provided returns true if every single class is present.
     */
    contains(className: string): boolean;
    /**
     *
     * @param className classes to be added to this list.
     * @returns the current instance of the DomClasses object to allow for chaining.
     */
    add(className: string): DomClasses;
    /**
     *
     * @param className the classes to be removed from the list.
     * @returns the current instance of the DomClasses object to allow for chaining.
     */
    remove(className: string): DomClasses;
    /**
     *
     * @param className the classes we want to toggle.
     * @param force if true, will forcibly add all the values of `className`; similarly will remove
     * all of the classNames if false.
     *
     * If not specified does a quick check to determine if the class is present and adds/removes it accordingly.
     * @returns
     */
    toggle(className: string, force?: boolean): DomClasses;
    /**
     * @param currentClass the class to be removed
     * @param newClass the class to be added.
     * @description if `currentClass` is not found, then `newClass` will not be added.
     * @returns the current instance of the DomClasses object.
     */
    replace(currentClass: string, newClass: string): DomClasses;
    /**
     * returns the size of the classes we have currently
     */
    get count(): number;
    /**
     *
     * @param other Another DomClasses instance
     * @returns returns the current DomClasses instance after the classes from `other` have been merged in.
     */
    combine(other: DomClasses): DomClasses;
    /**
     *
     * @returns returns a string representation of the object for HTML consumption.
     * **NOTE:** order is not guaranteed.
     */
    toString(): string;
    toJSON(): string;
    /**
     *
     * @returns Returns a query string selector that can be used for `document.querySelector()` calls. Mostly used for testing purposes.
     */
    toQuery(): string;
}
