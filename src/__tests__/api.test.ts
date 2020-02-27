import { Server, Resource, Element } from '../models';
import { ElementFactory } from '../factories';
import { ElementTransformer } from '../transformers';

// tslint:disable: no-unused-expression
it('throws an error when an invalid ip address is entered', () => {
    expect(() => {
        new Server('12.42.125.abc', 22005);
    }).toThrow();
});

it('creates a server with the the specified ip address and port', () => {
    expect(() => {
        new Server('12.42.125.222', 22005);
    }).not.toThrow();
});

it('transforms a resource correctly from server', () => {
    expect(Resource.fromServer('^R^test_resource').getName()).toBe('test_resource');
});

it('transforms an element correctly from server', () => {
    expect(Element.fromServer('^E^23512').getId()).toBe('23512');
});

it('transforms a resource correctly to server', () => {
    expect(new Resource('test_resource').stringify()).toBe('^R^test_resource');
});

it('transforms an element correctly to server', () => {
    expect(new Element('23512').stringify()).toBe('^E^23512');
});

it('factory transforms an element correctly from server', () => {
    expect(ElementFactory.fromServer('^E^23512')).toBeInstanceOf(Element);
});

it('factory transforms a resource correctly from server', () => {
    expect(ElementFactory.fromServer('^R^test_resource')).toBeInstanceOf(Resource);
});

it('transforms data correctly from server', () => {
    const data = '[["^E^12419","^E^12445","^E^12538","^E^12550","^R^test_resource"]]';
    const expected = [[new Element('12419'), new Element('12445'), new Element('12538'), new Element('12550'), new Resource('test_resource')]];
    expect(ElementTransformer.fromServer(data)).toMatchObject(expected);
});