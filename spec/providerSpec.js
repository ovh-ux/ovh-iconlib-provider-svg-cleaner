'use strict';

const errors = require('@rduk/errors');
const BaseProvider = require('../lib/base');

describe('provider', function() {

    describe('base', function() {

        describe('instantiated without valid config', function() {
            it('should throw an ArgumentError', function() {
                expect(function() {
                    new BaseProvider();
                }).toThrowError(errors.ArgumentError);

                expect(function() {
                    new BaseProvider({});
                }).toThrowError(errors.ArgumentError);
            });
        });

        describe('method clean, when called,', function() {
            it('should throw a NotImplementedError', function() {
                expect(function() {
                    let provider = new BaseProvider({
                        name: 'test'
                    });
                    provider.clean();
                }).toThrowError(errors.NotImplementedError);
            });
        });

    });

});
