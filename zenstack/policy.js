"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const runtime_1 = require("@zenstackhq/runtime");
function User_update(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (user == null) ? { OR: [] } : {
        id: user.id
    };
}
function User_delete(context, db) {
    const user = (0, runtime_1.hasAllFields)(context.user, ['id']) ? context.user : null;
    return (user == null) ? { OR: [] } : {
        id: user.id
    };
}
const policy = {
    guard: {
        example: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, account: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, session: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        }, user: {
            create: true, create_input: true, update: User_update, postUpdate: true, read: true, delete: User_delete,
        }, verificationToken: {
            create: false, create_input: false, update: false, postUpdate: true, read: false, delete: false,
        },
    },
    validation: {
        example: {
            hasValidation: false
        },
        account: {
            hasValidation: false
        },
        session: {
            hasValidation: false
        },
        user: {
            hasValidation: false
        },
        verificationToken: {
            hasValidation: false
        },
    }
};
exports.default = policy;
